import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest, requireRole } from '@/lib/authMiddleware';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import ProgressUpdate from '@/models/ProgressUpdate';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Helper function to upload file to Cloudinary
async function uploadToCloudinary(file: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'buildAhomes' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result?.secure_url || '');
      }
    );
    
    uploadStream.end(file);
  });
}

export const POST = requireRole(['engineer'], async (req: AuthRequest) => {
  try {
    await dbConnect();
    
    // Parse form data with files
    const formData = await req.formData();
    const projectId = formData.get('projectId') as string;
    const description = formData.get('description') as string;
    
    // Validate input
    if (!projectId || !description) {
      return NextResponse.json(
        { success: false, message: 'Project ID and description are required' },
        { status: 400 }
      );
    }
    
    const engineerId = req.user?.userId;
    
    // Check if project exists and is assigned to this engineer
    const project = await Project.findOne({
      _id: projectId,
      engineerId
    });
    
    if (!project) {
      return NextResponse.json(
        { success: false, message: 'Project not found or not assigned to you' },
        { status: 404 }
      );
    }
    
    // Handle image uploads - limited to 9 images
    const imageFiles = formData.getAll('images') as File[];
    const imageUrls: string[] = [];
    
    if (imageFiles && imageFiles.length > 0) {
      // Check if image count exceeds maximum limit
      if (imageFiles.length > 9) {
        return NextResponse.json(
          { success: false, message: 'Maximum of 9 images allowed per update' },
          { status: 400 }
        );
      }
      
      for (const file of imageFiles) {
        // Convert file to buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        // Upload to Cloudinary
        const imageUrl = await uploadToCloudinary(buffer);
        if (imageUrl) {
          imageUrls.push(imageUrl);
        }
      }
    }
    
    // Create progress update
    const progressUpdate = await ProgressUpdate.create({
      projectId,
      uploadedBy: engineerId,
      imageUrls,
      description
    });
    
    return NextResponse.json({
      success: true,
      data: progressUpdate
    });
    
  } catch (error) {
    console.error('Create progress update error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while creating progress update' },
      { status: 500 }
    );
  }
});
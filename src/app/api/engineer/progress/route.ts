import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest, requireRole } from '@/lib/authMiddleware';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import ProgressUpdate from '@/models/ProgressUpdate';

async function handler(req: AuthRequest) {
  if (req.method === 'POST') {
    try {
      await dbConnect();
      const { projectId, imageUrls, description } = await req.json();
      const engineerId = req.user?.userId;
      
      // Validate input
      if (!projectId || !description) {
        return NextResponse.json(
          { success: false, message: 'Project ID and description are required' },
          { status: 400 }
        );
      }
      
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
      
      // Create progress update
      const progressUpdate = await ProgressUpdate.create({
        projectId,
        uploadedBy: engineerId,
        imageUrls: imageUrls || [],
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
  } else {
    return NextResponse.json(
      { success: false, message: 'Method not allowed' },
      { status: 405 }
    );
  }
}

export const POST = requireRole(['engineer'], handler);
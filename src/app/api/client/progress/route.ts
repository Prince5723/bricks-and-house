// /app/api/client/progress/route.ts (continued)
import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest, requireRole } from '@/lib/authMiddleware';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import ProgressUpdate from '@/models/ProgressUpdate';

async function handler(req: AuthRequest) {
  try {
    await dbConnect();
    const clientId = req.user?.userId;
    const projectId = req.nextUrl.searchParams.get('projectId');
    
    // Validate project ID if provided
    if (projectId) {
      // Check if project belongs to this client
      const project = await Project.findOne({ 
        _id: projectId, 
        clientId 
      });
      
      if (!project) {
        return NextResponse.json(
          { success: false, message: 'Project not found or not assigned to you' },
          { status: 404 }
        );
      }
      
      // Get progress updates for specific project
      const progressUpdates = await ProgressUpdate.find({ projectId })
        .populate('uploadedBy', 'name')
        .sort({ createdAt: -1 });
      
      return NextResponse.json({
        success: true,
        data: progressUpdates
      });
    } else {
      // Get all projects for this client
      const projects = await Project.find({ clientId }).select('_id');
      const projectIds = projects.map(project => project._id);
      
      // Get progress updates for all client projects
      const progressUpdates = await ProgressUpdate.find({ 
        projectId: { $in: projectIds } 
      })
        .populate('projectId', 'siteAddress')
        .populate('uploadedBy', 'name')
        .sort({ createdAt: -1 });
      
      return NextResponse.json({
        success: true,
        data: progressUpdates
      });
    }
  } catch (error) {
    console.error('Get progress updates error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while getting progress updates' },
      { status: 500 }
    );
  }
}

export const GET = requireRole(['client'], handler);
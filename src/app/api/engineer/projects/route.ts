import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest, requireRole } from '@/lib/authMiddleware';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';

async function handler(req: AuthRequest) {
  try {
    await dbConnect();
    const engineerId = req.user?.userId;
    console.log("engineerId:", engineerId);
    
    // Get all projects assigned to the engineer
    const projects = await Project.find({ engineerId })
      .populate('clientId', 'name email')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Get engineer projects error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while getting projects' },
      { status: 500 }
    );
  }
}

export const GET = requireRole(['engineer'], handler);
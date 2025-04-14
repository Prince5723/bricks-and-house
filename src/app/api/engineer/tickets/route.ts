import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest, requireRole } from '@/lib/authMiddleware';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import Ticket from '@/models/Ticket';

async function getHandler(req: AuthRequest) {
  try {
    await dbConnect();
    const engineerId = req.user?.userId;
    
    // Get projects assigned to this engineer
    const projects = await Project.find({ engineerId }).select('_id');
    const projectIds = projects.map(project => project._id);
    
    // Get tickets for these projects
    const tickets = await Ticket.find({ 
      projectId: { $in: projectIds },
      raisedBy: engineerId 
    })
      .populate('projectId', 'siteAddress')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: tickets
    });
  } catch (error) {
    console.error('Get engineer tickets error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while getting tickets' },
      { status: 500 }
    );
  }
}

async function postHandler(req: AuthRequest) {
  try {
    await dbConnect();
    const { projectId, title, description } = await req.json();
    const engineerId = req.user?.userId;
    
    // Validate input
    if (!projectId || !title || !description) {
      return NextResponse.json(
        { success: false, message: 'Project ID, title and description are required' },
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
    
    // Create ticket
    const ticket = await Ticket.create({
      projectId,
      raisedBy: engineerId,
      title,
      description,
      status: 'pending'
    });
    
    return NextResponse.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    console.error('Create ticket error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while creating ticket' },
      { status: 500 }
    );
  }
}

export const GET = requireRole(['engineer'], getHandler);
export const POST = requireRole(['engineer'], postHandler);
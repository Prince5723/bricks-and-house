import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Project from '@/models/Project';
import { requireRole } from '@/lib/authMiddleware';
import mongoose from 'mongoose';

async function handler(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { siteAddress, clientId, engineerId } = body;
    
    // Validate input
    if (!siteAddress || !clientId || !engineerId) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Validate clientId and engineerId
    const clientExists = await User.findOne({ 
      _id: clientId, 
      role: 'client' 
    });
    
    const engineerExists = await User.findOne({ 
      _id: engineerId, 
      role: 'engineer' 
    });
    
    if (!clientExists) {
      return NextResponse.json(
        { success: false, message: 'Client not found' },
        { status: 404 }
      );
    }
    
    if (!engineerExists) {
      return NextResponse.json(
        { success: false, message: 'Engineer not found' },
        { status: 404 }
      );
    }
    
    // Create new project
    const newProject = await Project.create({
      siteAddress,
      clientId,
      engineerId,
      status: 'in progress'
    });
    
    return NextResponse.json({
      success: true,
      data: {
        id: newProject._id,
        siteAddress: newProject.siteAddress,
        clientId: newProject.clientId,
        engineerId: newProject.engineerId,
        status: newProject.status
      }
    });
  } catch (error) {
    console.error('Create project error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while creating project' },
      { status: 500 }
    );
  }
}

export const POST = requireRole(['admin'], handler);
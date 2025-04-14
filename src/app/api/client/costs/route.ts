import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest, requireRole } from '@/lib/authMiddleware';
import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import Ticket from '@/models/Ticket';
import mongoose from 'mongoose';

async function handler(req: AuthRequest) {
  try {
    await dbConnect();
    const clientId = req.user?.userId;
    const projectId = req.nextUrl.searchParams.get('projectId');
    
    // Handle specific project costs
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
      
      // Get approved tickets with costs for this project
      const tickets = await Ticket.find({ 
        projectId,
        status: 'approved',
        estimatedCost: { $ne: null }
      }).sort({ createdAt: -1 });
      
      // Calculate total cost
      const totalCost = tickets.reduce((sum, ticket) => sum + (ticket.estimatedCost || 0), 0);
      
      return NextResponse.json({
        success: true,
        data: {
          projectId,
          siteAddress: project.siteAddress,
          tickets,
          totalCost,
          ticketCount: tickets.length
        }
      });
    } else {
      // Get all projects for this client
      const projects = await Project.find({ clientId });
      const projectIds = projects.map(project => project._id);
      
      // Get all approved tickets with costs across all projects
      const tickets = await Ticket.find({ 
        projectId: { $in: projectIds },
        status: 'approved',
        estimatedCost: { $ne: null }
      })
        .populate('projectId', 'siteAddress')
        .sort({ projectId: 1, createdAt: -1 });
      
      // Calculate costs per project
      const costsByProject = projects.map(project => {
        const projectTickets = tickets.filter(ticket => 
          ticket.projectId._id.toString() === project._id.toString()
        );
        
        const projectTotalCost = projectTickets.reduce(
          (sum, ticket) => sum + (ticket.estimatedCost || 0), 
          0
        );
        
        return {
          projectId: project._id,
          siteAddress: project.siteAddress,
          totalCost: projectTotalCost,
          ticketCount: projectTickets.length
        };
      });
      
      // Calculate overall total
      const overallTotalCost = costsByProject.reduce(
        (sum, project) => sum + project.totalCost, 
        0
      );
      
      return NextResponse.json({
        success: true,
        data: {
          projects: costsByProject,
          overallTotalCost,
          totalTickets: tickets.length
        }
      });
    }
  } catch (error) {
    console.error('Get costs error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while getting costs' },
      { status: 500 }
    );
  }
}

export const GET = requireRole(['client'], handler);
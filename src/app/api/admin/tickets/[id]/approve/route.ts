import { NextRequest, NextResponse } from 'next/server';
import { AuthRequest, requireRole } from '@/lib/authMiddleware';
import dbConnect from '@/lib/mongodb';
import Ticket from '@/models/Ticket';

async function handler(req: AuthRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const { id } = params;
    const { estimatedCost } = await req.json();
    
    // Validate input
    if (!estimatedCost || typeof estimatedCost !== 'number' || estimatedCost <= 0) {
      return NextResponse.json(
        { success: false, message: 'Valid estimated cost is required' },
        { status: 400 }
      );
    }
    
    // Find and update ticket
    const ticket = await Ticket.findById(id);
    
    if (!ticket) {
      return NextResponse.json(
        { success: false, message: 'Ticket not found' },
        { status: 404 }
      );
    }
    
    if (ticket.status !== 'pending') {
      return NextResponse.json(
        { success: false, message: 'Only pending tickets can be approved' },
        { status: 400 }
      );
    }
    
    // Update ticket
    ticket.status = 'approved';
    ticket.approvedBy = req.user?.userId;
    ticket.estimatedCost = estimatedCost;
    ticket.updatedAt = new Date();
    await ticket.save();
    
    return NextResponse.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    console.error('Approve ticket error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while approving ticket' },
      { status: 500 }
    );
  }
}

export const PUT = requireRole(['admin'], handler);
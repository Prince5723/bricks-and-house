import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Ticket from '@/models/Ticket';
import { requireRole } from '@/lib/authMiddleware';

async function handler(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all tickets with populated references
    const tickets = await Ticket.find()
      .populate('projectId', 'siteAddress')
      .populate('raisedBy', 'name email')
      .populate('approvedBy', 'name email')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: tickets
    });
  } catch (error) {
    console.error('Get tickets error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while getting tickets' },
      { status: 500 }
    );
  }
}

export const GET = requireRole(['admin'], handler);
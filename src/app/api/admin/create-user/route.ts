import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword } from '@/utils/hashing';
import { requireRole } from '@/lib/authMiddleware';

async function handler(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, password, role } = body;
    
    // Validate input
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Validate role
    if (!['client', 'engineer'].includes(role)) {
      return NextResponse.json(
        { success: false, message: 'Invalid role. Must be client or engineer' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'Email already registered' },
        { status: 409 }
      );
    }
    
    // Hash password
    const passwordHash = await hashPassword(password);
    
    // Create new user
    const newUser = await User.create({
      name,
      email,
      passwordHash,
      role
    });
    
    return NextResponse.json({
      success: true,
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while creating user' },
      { status: 500 }
    );
  }
}

export const POST = requireRole(['admin'], handler);

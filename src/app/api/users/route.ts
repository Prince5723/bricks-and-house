// /app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const role = searchParams.get('role');

    if (!role) {
      return NextResponse.json({ success: false, message: 'Role is required' }, { status: 400 });
    }

    const users = await User.find({ role }).select('_id name email');

    return NextResponse.json({ success: true, users });
  } catch (err) {
    console.error('Fetch users by role error:', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

// src/app/api/setup-admin/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcrypt';

const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'admin@1'; // You can also pull from env for extra security
const ADMIN_ROLE = 'admin';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
    if (existingAdmin) {
      return NextResponse.json({ success: false, message: 'Admin already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

    const admin = new User({
      name: 'Admin',
      email: ADMIN_EMAIL,
      passwordHash: hashedPassword,
      role: ADMIN_ROLE,
    });

    await admin.save();

    return NextResponse.json({ success: true, message: 'Admin created successfully' });
  } catch (error: any) {
    console.error('[ADMIN_SETUP_ERROR]', error);
    return NextResponse.json({ success: false, message: 'Something went wrong' }, { status: 500 });
  }
}

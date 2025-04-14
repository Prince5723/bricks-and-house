import { NextRequest, NextResponse } from "next/server";
import  dbConnect  from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password are required." }, { status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found." }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Invalid credentials." }, { status: 401 });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ success: true, message: "Login successful", token });

    return response;
  } catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

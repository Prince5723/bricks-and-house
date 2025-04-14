import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './utils/jwt';

// Paths that don't require authentication
const publicPaths = ['/api/auth/login'];

// Role-based access rules
const rolePathMapping = {
  'admin': ['/api/admin'],
  'engineer': ['/api/engineer'],
  'client': ['/api/client']
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip authentication for public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  
  // Check for auth token
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { success: false, message: 'Authentication required' },
      { status: 401 }
    );
  }
  
  const token = authHeader.substring(7);
  const payload = verifyToken(token);
  
  if (!payload) {
    return NextResponse.json(
      { success: false, message: 'Invalid or expired token' },
      { status: 401 }
    );
  }
  
  // Role-based access control
  const userRole = payload.role;
  const allowedPaths = rolePathMapping[userRole as keyof typeof rolePathMapping] || [];
  
  // Check if user has access to the requested path
  const hasAccess = allowedPaths.some(path => pathname.startsWith(path));
  
  if (!hasAccess) {
    return NextResponse.json(
      { success: false, message: 'Access denied' },
      { status: 403 }
    );
  }
  
  // Proceed with the request
  return NextResponse.next();
}

// Configure middleware to run on specific paths
export const config = {
  matcher: ['/api/:path*'],
};
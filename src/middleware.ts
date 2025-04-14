import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './utils/jwt';

// Paths that don't require authentication
const publicPaths = ['/api/auth/login'];

// Role-based access rules
const rolePathMapping = {
  'admin': ['/api/admin', '/dashboard/admin'],
  'engineer': ['/api/engineer', '/dashboard/engineer'],
  'client': ['/api/client', '/dashboard/client']
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  let token = request.cookies.get('token')?.value;

  if (!token) {
    return pathname.startsWith('/api')
      ? NextResponse.json({ success: false, message: 'Authentication required' }, { status: 401 })
      : NextResponse.redirect(new URL('/login', request.url));
  }

  const payload = await verifyToken(token);
  
  if (!payload) {
    return pathname.startsWith('/api')
      ? NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 })
      : NextResponse.redirect(new URL('/login', request.url));
  }

  const userRole = payload.role;
  const allowedPaths = rolePathMapping[userRole as keyof typeof rolePathMapping] || [];

  const hasAccess = allowedPaths.some(path => pathname.startsWith(path));
  if (!hasAccess) {
    return pathname.startsWith('/api')
      ? NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 })
      : NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

// Configure middleware to run on specific paths
export const config = {
  matcher: ['/api/:path*', '/dashboard/admin/:path*', '/dashboard/engineer/:path*', '/dashboard/client/:path*'],
};
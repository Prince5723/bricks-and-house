import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, TokenPayload } from '../utils/jwt';
import { cookies } from 'next/headers';

export interface AuthRequest extends NextRequest {
  user?: TokenPayload;
}

export async function authenticateUser(req: AuthRequest): Promise<TokenPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return null;
  }
  
  return await verifyToken(token);
}

export function requireAuth(handler: Function) {
  return async (req: AuthRequest, ...args: any[]) => {
    const user = await authenticateUser(req);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' }, 
        { status: 401 }
      );
    }
    
    req.user = user;
    return handler(req, ...args);
  };
}

export function requireRole(roles: string[], handler: Function) {
  return requireAuth(async (req: AuthRequest, ...args: any[]) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return NextResponse.json(
        { success: false, message: 'Access denied' }, 
        { status: 403 }
      );
    }
    
    return handler(req, ...args);
  });
}
import * as jose from 'jose';
import { IUser } from '../models/User';

// Secret key handling for Edge Runtime
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);
const JWT_EXPIRY = '7d'; // Token expires in 7 days

export interface TokenPayload extends jose.JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export async function generateToken(user: IUser): Promise<string> {
  const payload: TokenPayload = {
    userId: user._id.toString(),
    email: user.email,
    role: user.role
  };

  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(JWT_EXPIRY)
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jose.jwtVerify(token, JWT_SECRET);
    return payload as TokenPayload;
  } catch (error) {
    return null;
  }
}
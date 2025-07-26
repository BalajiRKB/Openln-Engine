import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/user.js';
import { AuthRequest } from '../types/index.js';

interface DecodedToken extends JwtPayload {
  id: string;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token: string | undefined;

  // Check for token in cookies or Authorization header
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized - no token'
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

    // Add user to request
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error: any) {
    console.error('Authentication error:', error);
    res.status(401).json({
      success: false,
      message: 'Not authorized - invalid token'
    });
  }
};
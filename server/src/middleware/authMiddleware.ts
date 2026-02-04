import { Response, NextFunction } from 'express';
import { verifyToken } from '../utils/auth.js';
import User from '../models/User.js';
import { AuthRequest } from '../types/index.js';

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
    let token;

    if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Not authorized to access this route'
        });
    }

    try {
        const decoded = await verifyToken(token);

        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to access this route'
            });
        }

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            });
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            success: false,
            message: 'Not authorized to access this route'
        });
    }
};

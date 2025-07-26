import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types/index.js';
export declare const protect: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;

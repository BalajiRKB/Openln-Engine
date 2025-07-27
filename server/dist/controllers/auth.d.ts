import { Request, Response } from 'express';
import { AuthRequest, SignupRequestBody, LoginRequestBody, ApiResponse } from '../types/index.js';
export declare const signup: (req: Request<{}, ApiResponse, SignupRequestBody>, res: Response<ApiResponse>) => Promise<Response<ApiResponse<any>, Record<string, any>> | undefined>;
export declare const login: (req: Request<{}, ApiResponse, LoginRequestBody>, res: Response<ApiResponse>) => Promise<Response<ApiResponse<any>, Record<string, any>> | undefined>;
export declare const getUserProfile: (req: AuthRequest, res: Response<ApiResponse>) => Promise<Response<ApiResponse<any>, Record<string, any>> | undefined>;
export declare const logout: (req: Request, res: Response<ApiResponse>) => void;
export declare const updateProfile: (req: AuthRequest, res: Response<ApiResponse>) => Promise<Response<ApiResponse<any>, Record<string, any>> | undefined>;
export declare const googleCallback: (req: AuthRequest, res: Response) => void;

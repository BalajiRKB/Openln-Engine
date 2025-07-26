import { Response } from "express";
import { AuthRequest, IUser } from "../types/index.js";
declare const generateTaskContent: (user: IUser, taskType: string) => Promise<any>;
export declare const generateDailyTasks: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getTasks: (req: AuthRequest, res: Response) => Promise<void>;
export declare const completeTask: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUserProfile: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { generateTaskContent };

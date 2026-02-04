import { Request } from 'express';
import { Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password?: string;
    profileData: {
        rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
        level: number;
        experience: number;
        progress: number;
        goal: string;
        timeCommitment: string;
        learningStyle: string;
        skills: Array<{
            name: string;
            proficiency: number;
            lastImproved: Date;
        }>;
        completedTasks: any[]; // or ITask[]
        streak: {
            current: number;
            longest: number;
            lastCompleted?: Date;
        };
        achievements: Array<{
            title: string;
            description: string;
            icon: string;
            date: Date;
        }>;
        roadmapId?: any;
    };
    createdAt: Date;
    matchPassword(password: string): Promise<boolean>;
}

export interface ITask extends Document {
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    type: string;
    difficultyLevel: number;
    experienceReward: number;
    skillRewards: Array<{ skill: string; points: number }>;
    deadline?: Date;
    userId: any;
    content?: string;
    quiz?: Array<{
        question: string;
        options: string[];
        answer: string;
    }>;
    generatedBy: 'system' | 'ai';
    createdAt: Date;
    updatedAt?: Date;
}

export interface IRoadmap extends Document {
    userId: any;
    title: string;
    description: string;
    goal: string;
    milestones: Array<any>;
    currentMilestone: number;
    progress: number;
}

export interface AuthRequest extends Request {
    user?: any; // Populated by auth middleware
}

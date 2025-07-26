import { Request, Response } from 'express';
import { Document } from 'mongoose';

// User Interface
export interface IUser extends Document {
  _id: string;
  username: string;
  email: string;
  password?: string;
  isGoogleUser: boolean;
  googleId?: string;
  profileData: {
    rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
    level: number;
    experience: number;
    progress: number;
    goal: string;
    timeCommitment: '30 Min' | '1 hour' | '2 hrs +' | 'Flexible' | '';
    learningStyle: 'Visual' | 'Auditory' | 'Reading/Writing' | 'Kinesthetic' | 'Mixed/Flexible' | '';
    skills: Array<{
      name: string;
      proficiency: number;
      lastImproved: Date;
    }>;
    completedTasks: string[];
    streak: {
      current: number;
      longest: number;
      lastCompleted?: Date;
    };
    achievements: Array<{
      title: string;
      description: string;
      icon: 'level-up' | 'rank-up' | 'streak' | 'skill-mastery' | 'task-completion';
      date: Date;
    }>;
    roadmapId?: string;
  };
  createdAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
  getSignedJwtToken(): string;
  __isNewUser?: boolean;
}

// Task Interface
export interface ITask extends Document {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  type: 'AI Module' | 'Coding' | 'Reading' | 'Project' | 'Quiz' | 'Writing' | 'Practice';
  difficultyLevel: number;
  experienceReward: number;
  skillRewards: Array<{
    skill: string;
    points: number;
  }>;
  deadline?: Date;
  userId: string;
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

// Roadmap Interface - fixed to avoid ObjectId conflicts
export interface IRoadmap extends Document {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  goal?: string;
  milestones: Array<{
    title: string;
    description: string;
    status: 'locked' | 'available' | 'in_progress' | 'completed';
    order: number;
    type: 'knowledge' | 'project' | 'assessment' | 'skill_building';
    tasks?: string[];
    requiredSkills?: Array<{
      skill: string;
      minimumProficiency: number;
    }>;
    unlockConditions: {
      requiredMilestones?: string[];
      minimumLevel: number;
    };
    rewards: {
      experience?: number;
      skills?: Array<{
        skill: string;
        points: number;
      }>;
      achievements?: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
    };
    content: {
      overview?: string;
      steps?: string[];
      resources?: Array<{
        title: string;
        url: string;
        type: string;
      }>;
    };
    estimatedTime?: string;
    difficulty?: number;
  }>;
  currentMilestone: number;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

// Request with user - using a more flexible approach
export interface AuthenticatedRequest extends Request {
  user: IUser & { id: string };
}

// Use any for middleware compatibility
export type AuthRequest = Request & { user?: any };

// Generic API Response
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  token?: string;
  user?: Partial<IUser>;
}

// Auth Request Bodies
export interface SignupRequestBody {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface UpdateProfileRequestBody {
  goal?: string;
  timeCommitment?: string;
  learningStyle?: string;
}

import { Request, Response } from 'express';
import User from '../models/User.js';
import Roadmap from '../models/Roadmap.js';
import { signToken } from '../utils/auth.js';
import { AuthRequest, IUser } from '../types/index.js';

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, password, goal, timeCommitment, learningStyle } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: userExists.email === email
                    ? 'Email already in use'
                    : 'Username already taken'
            });
        }

        // Create new user
        const user = await User.create({
            username,
            email,
            password,
            profileData: {
                goal: goal || '',
                timeCommitment: timeCommitment || '',
                learningStyle: learningStyle || ''
            }
        });

        // Generate Token
        const token = await signToken({ id: user._id });

        // Set Cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });

        // Generate Roadmap Logic (Simplified version of original)
        if (goal) {
            await generateUserRoadmap(user._id, goal);
        }

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileData: user.profileData
            }
        });

    } catch (error: any) {
        console.error('Error in signup:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error during signup'
        });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email }) as IUser;

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Generate Token
        const token = await signToken({ id: user._id });

        // Set Cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileData: user.profileData
            }
        });

    } catch (error: any) {
        console.error('Error in login:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error during login'
        });
    }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
export const logout = (req: Request, res: Response) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({
        success: true,
        message: 'Logged out successfully'
    });
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getUserProfile = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }
        res.status(200).json({
            success: true,
            user: req.user
        });
    } catch (error: any) {
        console.error('Error getting user profile:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error getting user profile'
        });
    }
};

// @desc    Update user profile data
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req: AuthRequest, res: Response) => {
    try {
        const { goal, timeCommitment, learningStyle } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (goal) {
            user.profileData.goal = goal;
            // Regenerate roadmap if goal changes
            await generateUserRoadmap(user._id, goal);
        }
        if (timeCommitment) user.profileData.timeCommitment = timeCommitment;
        if (learningStyle) user.profileData.learningStyle = learningStyle;

        await user.save();

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileData: user.profileData
            }
        });

    } catch (error: any) {
        console.error('Error updating profile:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error updating profile'
        });
    }
};


// Helper to generate roadmap
const generateUserRoadmap = async (userId: any, goal: string) => {
    try {
        // Delete existing roadmap if any (simplified logic)
        await Roadmap.deleteMany({ userId });

        const roadmapTitle = `Your path to ${goal}`;
        const roadmapDescription = `A personalized learning journey to help you ${goal.toLowerCase()}`;

        let milestones: any[] = [];

        // Basic template based on original code
        if (goal === "Starting an Startup") {
            milestones = [
                {
                    title: "Business Foundations",
                    description: "Learn the fundamentals of business planning and market research",
                    status: "available",
                    order: 1,
                    type: "knowledge",
                    content: {
                        overview: "In this milestone, you'll learn the basics of business planning.",
                        steps: ["Understand the business model canvas", "Market research"],
                        resources: [{ title: "Business Model Canvas Explained", type: "video" }]
                    },
                    estimatedTime: "2-3 weeks",
                    difficulty: 1
                }
            ];
        } else if (goal === "Full stack Dev") {
            milestones = [
                {
                    title: "Frontend Fundamentals",
                    description: "Learn HTML, CSS and JavaScript basics",
                    status: "available",
                    order: 1,
                    type: "knowledge",
                    content: {
                        overview: "Master the building blocks of web development.",
                        steps: ["HTML structure", "CSS styling", "JS basics"],
                        resources: []
                    },
                    estimatedTime: "3-4 weeks",
                    difficulty: 1
                }
            ];
        }

        if (milestones.length > 0) {
            const roadmap = await Roadmap.create({
                userId,
                title: roadmapTitle,
                description: roadmapDescription,
                goal,
                milestones
            });

            await User.findByIdAndUpdate(userId, {
                'profileData.roadmapId': roadmap._id
            });
        }
    } catch (error) {
        console.error("Error generating roadmap:", error);
    }
};

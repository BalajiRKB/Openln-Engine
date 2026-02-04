import { Response } from 'express';
import Task from '../models/task.js';
import User from '../models/user.js';
import { AuthRequest } from '../types/index.js';
import { generateTaskContent } from './taskGenerator.js';

// Get today's tasks
export const getTodayTasks = async (req: AuthRequest, res: Response) => {
    try {
        // Find tasks created today for this user
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // Ensure req.user is populated by the auth middleware
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'User not authorized'
            });
        }

        const tasks = await Task.find({
            userId: req.user.id,
            createdAt: { $gte: today, $lt: tomorrow }
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            tasks
        });
    } catch (error: any) {
        console.error('Error fetching today\'s tasks:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error fetching today\'s tasks'
        });
    }
};

// Get individual task by ID
export const getTaskById = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'User not authorized'
            });
        }

        const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        res.status(200).json({
            success: true,
            task
        });
    } catch (error: any) {
        console.error('Error fetching task:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error fetching task'
        });
    }
};

// Regenerate task content
export const regenerateTask = async (req: AuthRequest, res: Response) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'User not authorized'
            });
        }

        // Find the task
        const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        // Get the user
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Generate new content
        const taskContent = await generateTaskContent(user, task.type);

        // Update the task
        task.content = taskContent.content;
        if (taskContent.quiz && taskContent.quiz.length > 0) {
            task.quiz = taskContent.quiz;
        }

        await task.save();

        res.status(200).json({
            success: true,
            task
        });
    } catch (error: any) {
        console.error('Error regenerating task content:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error regenerating task content'
        });
    }
};

import { Request, Response } from 'express';
import Task from '../models/task.js';

// @desc    Create new task
// @route   POST /api/tasks
// @access  Public
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, deadline } = req.body;

        // Validate request body
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Please provide both title and description'
            });
        }

        // Create task in database
        const task = await Task.create({
            title,
            description,
            deadline: deadline || undefined,
            userId: '507f1f77bcf86cd799439011' // placeholder user ID
        });

        res.status(201).json({
            success: true,
            data: task
        });

    } catch (error: any) {
        console.error('Error creating task:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error while creating task'
        });
    }
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Public
export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, deadline, status } = req.body;

        // Validate request body
        if (!title && !description && !deadline && !status) {
            return res.status(400).json({
                success: false,
                message: 'Please provide at least one field to update'
            });
        }

        // Find task
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        // Update task
        task = await Task.findByIdAndUpdate(
            id,
            {
                ...(title && { title }),
                ...(description && { description }),
                ...(deadline && { deadline }),
                ...(status && { status }),
                updatedBy: 'Balaji-R-2007',
                updatedAt: new Date().toISOString()
            },
            { new: true, runValidators: true }
        );

        res.json({
            success: true,
            data: task
        });

    } catch (error: any) {
        console.error('Error updating task:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server error while updating task'
        });
    }
};

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find()
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: tasks.length,
            data: tasks
        });

    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching tasks'
        });
    }
};
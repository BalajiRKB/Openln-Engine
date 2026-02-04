import express from 'express';
import { protect } from './middleware/authMiddleware.js';
import { signup, login, getUserProfile, logout, updateProfile } from './controllers/auth.js';
import { generateDailyTasks, getTasks, completeTask, getUserProfile as getProfileData } from './controllers/taskGenerator.js';
import { getTodayTasks, getTaskById, regenerateTask } from './controllers/taskController.js';

export const router = express.Router();

// Auth routes
router.post('/auth/signup', signup);
router.post('/auth/login', login);
router.get('/auth/me', protect, getUserProfile);
router.post('/auth/logout', protect, logout);
router.put('/auth/profile', protect, updateProfile);

// Task routes
router.get('/tasks', protect, getTasks);
router.post('/tasks/generate', protect, generateDailyTasks);

// IMPORTANT: Put specific routes before parameterized routes
// Today's tasks route
router.get('/tasks/today', protect, getTodayTasks);

// Complete task route
router.post('/tasks/:id/complete', protect, completeTask);

// Individual task route - MUST come after /tasks/today
router.get('/tasks/:id', protect, getTaskById);

// Regenerate task content route
router.post('/tasks/:id/regenerate', protect, regenerateTask);

// Profile routes
router.get('/profile', protect, getProfileData);
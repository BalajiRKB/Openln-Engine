import express from 'express';
import { generateDailyTasks, getTasks, getTodayTasks, getTaskById, completeTask, regenerateTask } from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/generate', protect, generateDailyTasks);
router.get('/', protect, getTasks);
router.get('/today', protect, getTodayTasks);
router.get('/:id', protect, getTaskById);
router.post('/:id/complete', protect, completeTask);
router.post('/:id/regenerate', protect, regenerateTask);

export default router;

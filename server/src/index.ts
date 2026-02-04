import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173", "https://openln.netlify.app", "https://openln.pages.dev"],
    credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Fallback for profile route which might be called as /api/profile
import { getUserProfile } from './controllers/authController.js';
import { protect } from './middleware/authMiddleware.js';
app.get('/api/profile', protect, getUserProfile);


app.get('/', (req, res) => {
    res.send('API is running (Rewrite)');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

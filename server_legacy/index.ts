import { Buffer } from 'node:buffer';

// Polyfill for SlowBuffer which was removed in Node 25, required by older dependencies
if (typeof global.SlowBuffer === 'undefined') {
    // @ts-ignore
    global.SlowBuffer = Buffer;
}

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { router as routes } from './routes.js';
import connectDB from './config/db.js';
// Load environment variables - at the very top of the file
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Enable CORS
app.use(cors({
    origin: ["http://localhost:5173", "https://openln.netlify.app", "https://openln.pages.dev"],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});
app.use('/api', routes);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
    console.error("Error:", err);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
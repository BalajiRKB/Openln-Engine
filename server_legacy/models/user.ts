import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '../types/index.js';

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },

  profileData: {
    rank: {
      type: String,
      enum: ['E', 'D', 'C', 'B', 'A', 'S'],
      default: 'E'
    },
    level: {
      type: Number,
      default: 1,
      min: 1
    },
    experience: {
      type: Number,
      default: 0
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    goal: {
      type: String,
      default: ''
    },
    timeCommitment: {
      type: String,
      enum: ['30 Min', '1 hour', '2 hrs +', 'Flexible', ''],
      default: ''
    },
    learningStyle: {
      type: String,
      enum: ['Visual', 'Auditory', 'Reading/Writing', 'Kinesthetic', 'Mixed/Flexible', ''],
      default: ''
    },
    skills: [{
      name: String,
      proficiency: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
      },
      lastImproved: {
        type: Date,
        default: Date.now
      }
    }],
    completedTasks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }],
    streak: {
      current: {
        type: Number,
        default: 0
      },
      longest: {
        type: Number,
        default: 0
      },
      lastCompleted: {
        type: Date
      }
    },
    achievements: [{
      title: String,
      description: String,
      icon: {
        type: String,
        enum: ['level-up', 'rank-up', 'streak', 'skill-mastery', 'task-completion']
      },
      date: {
        type: Date,
        default: Date.now
      }
    }],
    roadmapId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roadmap"
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    if (this.password) {
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (error: any) {
    next(error);
  }
});

// Password comparison method
userSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

// JWT generation method
userSchema.methods.getSignedJwtToken = function (): string {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d'
  });
};

export default mongoose.model<IUser>('User', userSchema);
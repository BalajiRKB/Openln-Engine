import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
    title: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
    type: {
        type: String,
        enum: ['AI Module', 'Coding', 'Reading', 'Project', 'Quiz', 'Writing', 'Practice'],
        required: true
    },
    difficultyLevel: { type: Number, min: 1, max: 5, default: 1 },
    experienceReward: { type: Number, default: 10 },
    skillRewards: [{ skill: String, points: Number }],
    deadline: { type: Date },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: { type: String },
    quiz: [{
        question: String,
        options: [String],
        answer: String
    }],
    generatedBy: {
        type: String,
        enum: ['system', 'ai'],
        default: 'system'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
}, {
    timestamps: true
});

taskSchema.index({ status: 1, userId: 1, createdAt: -1 });

export default mongoose.model('Task', taskSchema);

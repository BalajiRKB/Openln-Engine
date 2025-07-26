import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    type: "AI Module" | "Coding" | "Reading" | "Project" | "Quiz" | "Writing" | "Practice";
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: mongoose.Types.ObjectId;
    difficultyLevel: number;
    experienceReward: number;
    skillRewards: mongoose.Types.DocumentArray<{
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }> & {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }>;
    quiz: mongoose.Types.DocumentArray<{
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    generatedBy: "system" | "ai";
    content?: string | null | undefined;
    updatedAt?: NativeDate | null | undefined;
    deadline?: NativeDate | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    type: "AI Module" | "Coding" | "Reading" | "Project" | "Quiz" | "Writing" | "Practice";
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: mongoose.Types.ObjectId;
    difficultyLevel: number;
    experienceReward: number;
    skillRewards: mongoose.Types.DocumentArray<{
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }> & {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }>;
    quiz: mongoose.Types.DocumentArray<{
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    generatedBy: "system" | "ai";
    content?: string | null | undefined;
    updatedAt?: NativeDate | null | undefined;
    deadline?: NativeDate | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    type: "AI Module" | "Coding" | "Reading" | "Project" | "Quiz" | "Writing" | "Practice";
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: mongoose.Types.ObjectId;
    difficultyLevel: number;
    experienceReward: number;
    skillRewards: mongoose.Types.DocumentArray<{
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }> & {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }>;
    quiz: mongoose.Types.DocumentArray<{
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    generatedBy: "system" | "ai";
    content?: string | null | undefined;
    updatedAt?: NativeDate | null | undefined;
    deadline?: NativeDate | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    type: "AI Module" | "Coding" | "Reading" | "Project" | "Quiz" | "Writing" | "Practice";
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: mongoose.Types.ObjectId;
    difficultyLevel: number;
    experienceReward: number;
    skillRewards: mongoose.Types.DocumentArray<{
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }> & {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }>;
    quiz: mongoose.Types.DocumentArray<{
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    generatedBy: "system" | "ai";
    content?: string | null | undefined;
    updatedAt?: NativeDate | null | undefined;
    deadline?: NativeDate | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    type: "AI Module" | "Coding" | "Reading" | "Project" | "Quiz" | "Writing" | "Practice";
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: mongoose.Types.ObjectId;
    difficultyLevel: number;
    experienceReward: number;
    skillRewards: mongoose.Types.DocumentArray<{
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }> & {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }>;
    quiz: mongoose.Types.DocumentArray<{
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    generatedBy: "system" | "ai";
    content?: string | null | undefined;
    updatedAt?: NativeDate | null | undefined;
    deadline?: NativeDate | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    type: "AI Module" | "Coding" | "Reading" | "Project" | "Quiz" | "Writing" | "Practice";
    description: string;
    title: string;
    status: "pending" | "in-progress" | "completed";
    userId: mongoose.Types.ObjectId;
    difficultyLevel: number;
    experienceReward: number;
    skillRewards: mongoose.Types.DocumentArray<{
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }> & {
        skill?: string | null | undefined;
        points?: number | null | undefined;
    }>;
    quiz: mongoose.Types.DocumentArray<{
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }> & {
        options: string[];
        question?: string | null | undefined;
        answer?: string | null | undefined;
    }>;
    generatedBy: "system" | "ai";
    content?: string | null | undefined;
    updatedAt?: NativeDate | null | undefined;
    deadline?: NativeDate | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;

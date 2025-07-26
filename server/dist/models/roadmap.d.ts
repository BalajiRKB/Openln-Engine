import mongoose from "mongoose";
declare const Roadmap: mongoose.Model<{
    createdAt: NativeDate;
    progress: number;
    title: string;
    userId: mongoose.Types.ObjectId;
    milestones: mongoose.Types.DocumentArray<{
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }> & {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }>;
    currentMilestone: number;
    updatedAt: NativeDate;
    description?: string | null | undefined;
    goal?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    progress: number;
    title: string;
    userId: mongoose.Types.ObjectId;
    milestones: mongoose.Types.DocumentArray<{
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }> & {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }>;
    currentMilestone: number;
    updatedAt: NativeDate;
    description?: string | null | undefined;
    goal?: string | null | undefined;
}, {}> & {
    createdAt: NativeDate;
    progress: number;
    title: string;
    userId: mongoose.Types.ObjectId;
    milestones: mongoose.Types.DocumentArray<{
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }> & {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }>;
    currentMilestone: number;
    updatedAt: NativeDate;
    description?: string | null | undefined;
    goal?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    progress: number;
    title: string;
    userId: mongoose.Types.ObjectId;
    milestones: mongoose.Types.DocumentArray<{
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }> & {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }>;
    currentMilestone: number;
    updatedAt: NativeDate;
    description?: string | null | undefined;
    goal?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    progress: number;
    title: string;
    userId: mongoose.Types.ObjectId;
    milestones: mongoose.Types.DocumentArray<{
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }> & {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }>;
    currentMilestone: number;
    updatedAt: NativeDate;
    description?: string | null | undefined;
    goal?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    progress: number;
    title: string;
    userId: mongoose.Types.ObjectId;
    milestones: mongoose.Types.DocumentArray<{
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }> & {
        type: "knowledge" | "project" | "assessment" | "skill_building";
        description: string;
        title: string;
        status: "completed" | "locked" | "available" | "in_progress";
        order: number;
        tasks: mongoose.Types.ObjectId[];
        requiredSkills: mongoose.Types.DocumentArray<{
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }> & {
            skill?: string | null | undefined;
            minimumProficiency?: number | null | undefined;
        }>;
        estimatedTime?: string | null | undefined;
        unlockConditions?: {
            requiredMilestones: mongoose.Types.ObjectId[];
            minimumLevel: number;
        } | null | undefined;
        rewards?: {
            skills: mongoose.Types.DocumentArray<{
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }> & {
                skill?: string | null | undefined;
                points?: number | null | undefined;
            }>;
            achievements: mongoose.Types.DocumentArray<{
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }> & {
                description?: string | null | undefined;
                title?: string | null | undefined;
                icon?: string | null | undefined;
            }>;
            experience?: number | null | undefined;
        } | null | undefined;
        content?: {
            steps: string[];
            resources: string[];
            overview?: string | null | undefined;
        } | null | undefined;
        difficulty?: number | null | undefined;
    }>;
    currentMilestone: number;
    updatedAt: NativeDate;
    description?: string | null | undefined;
    goal?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Roadmap;

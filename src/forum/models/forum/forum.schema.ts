import * as mongoose from 'mongoose';

export const ForumSchema = new mongoose.Schema({
    title: String,
    created_at: Date,
    message: String,
    userId: Number,
    lastname: String,
    firstname: String,
});
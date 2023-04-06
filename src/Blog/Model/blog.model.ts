import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
    imageUrl: {type: String, require: true},
    blogUrl: {type: String, require: true},
    title: {type: String, require: true},
})
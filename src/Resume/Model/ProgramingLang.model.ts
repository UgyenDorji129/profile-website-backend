import * as mongoose from 'mongoose';

export const ProgramingLangSchema = new mongoose.Schema({
    language: {type: String, require: true},
    percentage: {type: String, require: true}
})
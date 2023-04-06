import * as mongoose from 'mongoose';

export const EducationSchema = new mongoose.Schema({
    year: {type: String, require: true},
    title: {type: String, require: true},
    desc: {type: String, require: true}
})
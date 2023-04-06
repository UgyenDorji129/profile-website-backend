import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
    icon: {type:String, require: true},
    title: {type: String, require: true},
    desc: {type: String, require: true}
})
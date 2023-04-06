import * as mongoose from 'mongoose';

export const OtherSkillSchema = new mongoose.Schema({
  title: {type: String, require: true}  
})
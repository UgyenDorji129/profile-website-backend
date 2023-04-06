import * as mongoose from 'mongoose';

export const HomeSchema = new mongoose.Schema({
    name :{type: String, require: true},
    role : {type: String, require: true}
})
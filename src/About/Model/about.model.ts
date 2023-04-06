import * as mongoose from 'mongoose';

export const AboutSchema = new mongoose.Schema({
    desc: {type: String, require: true},
    age: {type: String, require: true},
    residence: {type: String, require: true},
    email: {type:String, require: true},
    phone: {type: String, require: true}
})
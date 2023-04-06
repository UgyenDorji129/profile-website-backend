import * as mongoose from 'mongoose';

export const FunFactSchema = new mongoose.Schema({
    icon: {type: String, require: true},
    title: {type: String, require: true},
    count: {type: String, require: true}
})
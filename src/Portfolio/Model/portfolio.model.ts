import * as mongoose from 'mongoose';

export const PortfolioSchema = new mongoose.Schema({
    imageUrl: {type: String, require: true},
    title: {type: String, require: true},
    desc: {type: String, require: true}
})
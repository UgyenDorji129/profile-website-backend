import * as mongoose from 'mongoose';

export const CertificateSchema = new mongoose.Schema({
    imageUrl: {type: String, require: true},
    title: {type: String, require: true},
    desc: {type: String, require: true},
})
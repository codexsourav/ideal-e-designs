import mongo, { Schema, model } from 'mongoose';
import { IEmails } from 'src/interfaces/model/emailsType.js';


const emails = new Schema<IEmails>({
    name: {
        type: String,
        required: true,
        lowercase: false,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    location: Object,
});

const EmailsModel = mongo.model<IEmails>("emails", emails);

export default EmailsModel;
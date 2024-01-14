import mongo, { Schema } from 'mongoose';
const emails = new Schema({
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
const EmailsModel = mongo.model("emails", emails);
export default EmailsModel;

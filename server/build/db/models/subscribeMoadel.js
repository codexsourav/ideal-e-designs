import mongo, { Schema } from 'mongoose';
const subscribe = new Schema({
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    totalSend: {
        type: Number,
        default: 0,
    }
});
const SubscribeModel = mongo.model("subscribe", subscribe);
export default SubscribeModel;

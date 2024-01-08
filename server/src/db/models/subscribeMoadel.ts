import mongo, { Schema, model } from 'mongoose';
import { ISubscribe } from 'src/interfaces/model/subscribeType.js';


const subscribe = new Schema<ISubscribe>({
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

const SubscribeModel = mongo.model<ISubscribe>("subscribe", subscribe);

export default SubscribeModel;
import { Document, Model } from 'mongoose';

// Define the interface for the Cat document
interface ISubscribe {
    email: string;
    date?: Date;
    totalSend?: number;
}

// Extend the Cat document with Document interface from Mongoose
interface ISubscribeDocument extends ISubscribe, Document { }

// Define the Cat model type
interface ISubscribeModel extends Model<ISubscribeDocument> { }

export { ISubscribe, ISubscribeDocument, ISubscribeModel };
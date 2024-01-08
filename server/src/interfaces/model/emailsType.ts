import { Document, Model } from 'mongoose';

// Define the interface for the Cat document
interface IEmails {
    name: string;
    email: string;
    phone: string | number;
    message: string;
    location: Object | null;
    date?: Date;
}

// Extend the Cat document with Document interface from Mongoose
interface IEmailsDocument extends IEmails, Document { }

// Define the Cat model type
interface IEmailsModel extends Model<IEmailsDocument> { }

export { IEmails, IEmailsDocument, IEmailsModel };
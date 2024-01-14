var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connecting DataBase...");
    try {
        const uri = process.env.MONGO_URI || "mongodb://localhost:27017/sourav";
        yield mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to mongo', error);
    }
});
export default connectDB;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import env from "dotenv";
import connectDB from './db/db.js';
import path from 'path';
import requestIp from 'request-ip';
import emailRoutes from './routes/emailRoutes.js';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const clint_path = path.join(__dirname, "../client/dist");
const app = express();
env.config();
const initApp = () => {
    const port = process.env.PORT || 8000;
    app.use(cors(), express.static(clint_path), express.static("static"), express.static("static/uploads"), express.json(), express.urlencoded({ extended: true }), cookieParser(), requestIp.mw(), emailRoutes);
    connectDB().then(() => {
        app.listen(port, () => {
            console.log(`Server listening at Port - ${process.env.PORT}`);
        });
    }).catch((e) => {
        console.log("App Start Error", e);
    });
};
initApp();
app.get("/heath", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ "message": "Everything is Healthy" });
}));
app.get("/*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.sendFile(path.join(clint_path, 'index.html'));
}));

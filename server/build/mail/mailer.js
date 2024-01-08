var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nodemailer from "nodemailer";
import env from "dotenv";
env.config();
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAILMAIL,
        pass: process.env.EMAILPASS,
    },
});
function sendNewEmail(to, subject, html) {
    return __awaiter(this, void 0, void 0, function* () {
        const info = yield transporter.sendMail({
            from: 'From: ' + to,
            to: process.env.EMAILSLIST,
            subject: subject,
            html: html,
        });
        return info;
    });
}
export default sendNewEmail;

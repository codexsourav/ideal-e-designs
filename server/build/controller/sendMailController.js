var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import EmailsModel from "../db/models/emailModel.js";
import sendNewEmail from "../mail/mailer.js";
import { contactMailTemplate } from "../mail/templates/contactMailTemplate.js";
import { isValidMobile, isValidateEmail } from "../utils/validate.js";
import SubscribeModel from "../db/models/subscribeMoadel.js";
export const sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, message, name, phone } = req.body;
    if (!name) {
        return res.status(203).json({ message: "Please Enter Your Name" });
    }
    else if (!email) {
        return res.status(203).json({ message: "Please Enter Your Email" });
    }
    else if (!isValidateEmail(email)) {
        return res.status(203).json({ message: "Enter A Valid Email ID" });
    }
    else if (!phone) {
        return res.status(203).json({ message: "Please Enter Your Phone No." });
    }
    else if (!isValidMobile(phone.toString())) {
        return res.status(203).json({ message: "Enter A Valid Mobile No." });
    }
    else if (!message) {
        return res.status(203).json({ message: "Type Your Message." });
    }
    const ipAddress = req.clientIp;
    let mapData = null;
    const resIp = yield axios.get(`https://ipapi.com/ip_api.php?ip=${ipAddress}`);
    const data = resIp.data;
    if (data.success != false) {
        mapData = data;
    }
    try {
        const newEmail = new EmailsModel({ email, message, name, phone, location: mapData });
        yield newEmail.save();
        const templateData = {
            name: name.toString(),
            phone: phone.toString(),
            city: mapData.city,
            code: mapData.location.calling_code,
            connection: mapData.connection.isp,
            continent: mapData.continent_name,
            country: mapData.country_name,
            currency: mapData.currency.code,
            daylight: mapData.time_zone.is_daylight_saving ? "YES" : "NO",
            email: email,
            ip: mapData.ip,
            lat: mapData.latitude,
            lun: mapData.longitude,
            message: message,
            osinfo: req.headers["user-agent"],
            timezone: mapData.time_zone.code,
        };
        const mailRes = yield sendNewEmail(email, `${name} - Contact Us`, contactMailTemplate(templateData));
        console.log(mailRes.response);
        return res.status(200).json({ message: "Email Send Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Email Send Field." });
    }
});
export const subscribe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        if (!isValidateEmail(email)) {
            return res.status(203).json({ message: "Enter A Valid Email ID" });
        }
        const existSub = yield SubscribeModel.findOne({ email });
        if (existSub) {
            return res.status(200).json({ message: "Congratulations, You Already Subscribed" });
        }
        else {
            const newSub = new SubscribeModel({ email });
            yield newSub.save();
            return res.status(200).json({ message: "Thank You, For Subscribe" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "UNknown Error Server" });
    }
});

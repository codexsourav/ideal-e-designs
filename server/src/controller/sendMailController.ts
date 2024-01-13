import axios from "axios";
import { Request, Response } from "express";
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js";
import EmailsModel from "../db/models/emailModel.js";
import { IPAddressType } from "src/interfaces/ip/IIp.js";
import { IEmails } from "src/interfaces/model/emailsType.js";
import sendNewEmail from "../mail/mailer.js";
import { ContactMailType, contactMailTemplate } from "../mail/templates/contactMailTemplate.js";
import { isValidMobile, isValidateEmail } from "../utils/validate.js";
import SubscribeModel from "../db/models/subscribeMoadel.js";
import { ISubscribe } from "src/interfaces/model/subscribeType.js";

export const sendMail = async (req: Request, res: Response) => {

    const { email, message, name, phone }: IEmails = req.body;

    if (!name) {
        return res.status(203).json({ message: "Please Enter Your Name" });
    } else if (!email) {
        return res.status(203).json({ message: "Please Enter Your Email" });
    } else if (!isValidateEmail(email)) {
        return res.status(203).json({ message: "Enter A Valid Email ID" });
    } else if (!phone) {
        return res.status(203).json({ message: "Please Enter Your Phone No." });
    } else if (!isValidMobile(phone.toString())) {
        return res.status(203).json({ message: "Enter A Valid Mobile No." });
    } else if (!message) {
        return res.status(203).json({ message: "Type Your Message." });
    }

    const ipAddress = req.clientIp;
    console.log(ipAddress);

    let mapData = null;
    const resIp = await axios.get(`https://ipapi.com/ip_api.php?ip=${ipAddress}`);
    const data: IPAddressType = resIp.data;

    if (data.success != false) {
        mapData = data;
    }

    try {
        const newEmail = new EmailsModel<IEmails>({ email, message, name, phone, location: mapData })
        await newEmail.save();
        const templateData: ContactMailType = {
            name: name.toString(),
            phone: phone.toString(),
            city: mapData!.city,
            code: mapData!.location.calling_code,
            connection: mapData!.connection.isp,
            continent: mapData!.continent_name,
            country: mapData!.country_name,
            currency: mapData!.currency.code,
            daylight: mapData!.time_zone.is_daylight_saving ? "NO" : "YES",
            email: email,
            ip: mapData!.ip,
            lat: mapData!.latitude,
            lun: mapData!.longitude,
            message: message,
            osinfo: req.headers["user-agent"]!,
            timezone: mapData!.time_zone.code,
            region_name: mapData!.region_name,
            zipcode: mapData!.region_name,
        }

        const mailRes: SMTPTransport.SentMessageInfo = await sendNewEmail(email, `${name} - Contact Us`, contactMailTemplate(templateData));
        console.log(mailRes.response);
        return res.status(200).json({ message: "Email Send Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Email Send Field." });

    }


}


export const subscribe = async (req: Request, res: Response) => {
    const { email }: ISubscribe = req.body;
    try {
        if (!isValidateEmail(email)) {
            return res.status(203).json({ message: "Enter A Valid Email ID" });
        }
        const existSub = await SubscribeModel.findOne({ email });
        if (existSub) {
            return res.status(200).json({ message: "Congratulations, You Already Subscribed" });
        } else {
            const newSub = new SubscribeModel({ email });
            await newSub.save();
            return res.status(200).json({ message: "Thank You, For Subscribe" });
        }
    } catch (error) {
        return res.status(500).json({ message: "UNknown Error Server" });
    }
};
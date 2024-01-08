import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import env from "dotenv";
import connectDB from './db/db.js';
import axios from 'axios';
import requestIp from 'request-ip';
import emailRoutes from './routes/emailRoutes.js';
import { IPAddressType } from './interfaces/ip/IIp.js';

const app: express.Express = express();
env.config();

const initApp = () => {

    const port = process.env.PORT || 8000;

    app.use(
        cors(),
        express.static("static"),
        express.static("static/uploads"),
        express.json(),
        express.urlencoded({ extended: true }),
        cookieParser(),
        requestIp.mw(),
        emailRoutes,
    );

    connectDB().then(() => {
        app.listen(port, () => {
            console.log(`Server listening at Port - ${process.env.PORT}`);
        });
    }).catch((e) => {
        console.log("App Start Error", e);
    });

}



app.get("/heath", async (req: Request, res: Response) => {
    res.send({ "message": "Everything is Healthy" });
});

app.get("/", async (req: Request, res: Response) => {
    const ipAddress = req.clientIp;
    let mapData = null;
    const resIp = await axios.get(`https://ipapi.com/ip_api.php?ip=${req.ip}`);
    const data: IPAddressType = resIp.data;

    if (data.success != false) {
        mapData = data;
    }

    res.send({
        "message": "Hi Welcome to Bid And Shops Api",
        ipAddress,
        browser: req.headers['user-agent'],
        info: mapData,
    });

});

initApp();

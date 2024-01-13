import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import env from "dotenv";
import connectDB from './db/db.js';
import path from 'path';
import requestIp from 'request-ip';
import emailRoutes from './routes/emailRoutes.js';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const clint_path: string = path.join(__dirname, "../client");

const app: express.Express = express();
env.config();

const initApp = () => {
    const port = process.env.PORT || 8000;
    app.use(
        cors(),
        express.static(clint_path),
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

initApp();

app.get("/heath", async (req: Request, res: Response) => {
    res.send({ "message": "Everything is Healthy" });
});

app.get("/*", async (req: Request, res: Response) => {
    return res.sendFile(path.join(clint_path, 'index.html'));
});



import { Router } from 'express';
import { sendMail, subscribe } from '../controller/sendMailController.js';
const appRouter = Router();
appRouter.post("/api/sendmail", sendMail);
appRouter.post("/api/subscribe", subscribe);
export default appRouter;

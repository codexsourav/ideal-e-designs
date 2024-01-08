var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import UsersModel from '../db/models/usersModels.js';
export default (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token;
        const cookieToken = req.cookies['user'];
        const headerToken = req.headers.authorization;
        if (headerToken) {
            token = headerToken.split(" ")[1];
        }
        else if (cookieToken) {
            token = cookieToken;
        }
        else {
            return res.status(401).send({ "error": "You Are Not Authorized", "auth": false });
        }
        if (!token) {
            return res.status(401).send({ "error": "You Are Not Authorized", "auth": false });
        }
        const user = jwt.verify(token, process.env.JWTKEY || "123");
        const userInfo = yield UsersModel.findOne({ "_id": user.id, isAllow: true }, { pass: 0 });
        if (!userInfo) {
            return res.status(401).send({ "error": "You Are Not Authorized", "auth": false });
        }
        req.authUser = userInfo;
        next();
    }
    catch (error) {
        console.log({
            "Error": "Unauthorized User Request",
            "message": error,
            "status": "Jwt Error",
        });
        return res.status(401).send({ "error": "You Are Not Authorized", "auth": false, "message": error.toString(), });
    }
});

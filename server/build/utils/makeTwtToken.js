import jwt from 'jsonwebtoken';
export const setJwtToken = (res, signWith) => {
    const token = jwt.sign(signWith, process.env.JWTKEY || "123");
    res.cookies("user", token, {
        expires: new Date(Date.now() + 280 * 24 * 3600000),
        // cookie for 280 days
    });
    return token;
};

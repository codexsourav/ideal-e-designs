import bcrypt from 'bcryptjs';
export const hashPass = (pass) => {
    return bcrypt.hashSync(pass, 10);
};
export const validateHashPass = (hash, pass) => {
    return bcrypt.compareSync(pass, hash);
};

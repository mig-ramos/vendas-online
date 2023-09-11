"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.createPasswordHashed = void 0;
const bcrypt_1 = require("bcrypt");
const createPasswordHashed = async (password) => {
    const saltOrRounds = 10;
    return (0, bcrypt_1.hash)(password, saltOrRounds);
};
exports.createPasswordHashed = createPasswordHashed;
const validatePassword = async (password, passwordHashed) => {
    return (0, bcrypt_1.compare)(password, passwordHashed);
};
exports.validatePassword = validatePassword;
//# sourceMappingURL=password.js.map
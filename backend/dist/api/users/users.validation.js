"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersValidation = void 0;
const zod_1 = require("zod");
class UsersValidation {
}
exports.UsersValidation = UsersValidation;
UsersValidation.SIGNUP = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(6, 'Username must have a minimum of 6 characters')
        .max(50, 'Username must have a maximum of 50 characters'),
    password: zod_1.z
        .string()
        .min(8, 'Password must have a minimum of 8 characters')
        .max(255, 'Password must have a maximum of 255 characters'),
});
UsersValidation.SIGNIN = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(6, 'Username must have a minimum of 6 characters')
        .max(50, 'Username must have a maximum of 50 characters'),
    password: zod_1.z
        .string()
        .min(8, 'Password must have a minimum of 8 characters')
        .max(255, 'Password must have a maximum of 255 characters'),
});
UsersValidation.UPDATE = zod_1.z.object({
    password: zod_1.z
        .string()
        .min(8, 'Password must have a minimum of 8 characters')
        .max(255, 'Password must have a maximum of 255 characters'),
});
//# sourceMappingURL=users.validation.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusValidation = void 0;
const zod_1 = require("zod");
class StatusValidation {
}
exports.StatusValidation = StatusValidation;
StatusValidation.CREATE = zod_1.z.object({
    nama_status: zod_1.z
        .string()
        .min(2, 'Nama Status must have a minimum of 2 characters')
        .max(25, 'Nama Status must have a maximum of 25 characters'),
});
StatusValidation.UPDATE = zod_1.z.object({
    nama_status: zod_1.z
        .string()
        .min(2, 'Nama Status must have a minimum of 2 characters')
        .max(25, 'Nama Status must have a maximum of 25 characters'),
});
//# sourceMappingURL=status.validation.js.map
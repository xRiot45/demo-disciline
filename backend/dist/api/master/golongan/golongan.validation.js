"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GolonganValidation = void 0;
const zod_1 = require("zod");
class GolonganValidation {
}
exports.GolonganValidation = GolonganValidation;
GolonganValidation.CREATE = zod_1.z.object({
    nama_golongan: zod_1.z
        .string()
        .min(2, 'Nama Golongan must have a minimum of 2 characters')
        .max(25, 'Nama Golongan must have a maximum of 25 characters'),
});
GolonganValidation.UPDATE = zod_1.z.object({
    nama_golongan: zod_1.z
        .string()
        .min(2, 'Nama Golongan must have a minimum of 2 characters')
        .max(25, 'Nama Golongan must have a maximum of 25 characters'),
});
//# sourceMappingURL=golongan.validation.js.map
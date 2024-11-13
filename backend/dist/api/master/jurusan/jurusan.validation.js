"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JurusanValidation = void 0;
const zod_1 = require("zod");
class JurusanValidation {
}
exports.JurusanValidation = JurusanValidation;
JurusanValidation.CREATE = zod_1.z.object({
    nama_jurusan: zod_1.z
        .string()
        .min(2, 'Nama Jurusan must have a minimum of 2 characters')
        .max(25, 'Nama Jurusan must have a maximum of 25 characters'),
});
JurusanValidation.UPDATE = zod_1.z.object({
    nama_jurusan: zod_1.z
        .string()
        .min(2, 'Nama Jurusan must have a minimum of 2 characters')
        .max(25, 'Nama Jurusan must have a maximum of 25 characters'),
});
//# sourceMappingURL=jurusan.validation.js.map
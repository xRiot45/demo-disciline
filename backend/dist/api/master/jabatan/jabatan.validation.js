"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JabatanValidation = void 0;
const zod_1 = require("zod");
class JabatanValidation {
}
exports.JabatanValidation = JabatanValidation;
JabatanValidation.CREATE = zod_1.z.object({
    nama_jabatan: zod_1.z
        .string()
        .min(2, 'Nama Jabatan must have a minimum of 2 characters')
        .max(25, 'Nama Jabatan must have a maximum of 25 characters'),
});
JabatanValidation.UPDATE = zod_1.z.object({
    nama_jabatan: zod_1.z
        .string()
        .min(2, 'Nama Jabatan must have a minimum of 2 characters')
        .max(25, 'Nama Jabatan must have a maximum of 25 characters'),
});
//# sourceMappingURL=jabatan.validation.js.map
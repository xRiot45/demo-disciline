"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KelasValidation = void 0;
const zod_1 = require("zod");
class KelasValidation {
}
exports.KelasValidation = KelasValidation;
KelasValidation.CREATE = zod_1.z.object({
    nama_kelas: zod_1.z
        .string()
        .min(2, 'Nama Kelas must have a minimum of 2 characters')
        .max(25, 'Nama Kelas must have a maximum of 25 characters'),
    jurusanId: zod_1.z.string().uuid('Jurusan Id must be a valid UUID'),
    guruId: zod_1.z.string().uuid('Guru Id must be a valid UUID'),
});
KelasValidation.UPDATE = zod_1.z.object({
    nama_kelas: zod_1.z
        .string()
        .min(2, 'Nama Kelas must have a minimum of 2 characters')
        .max(25, 'Nama Kelas must have a maximum of 25 characters'),
    jurusanId: zod_1.z.string().uuid('Jurusan Id must be a valid UUID'),
    guruId: zod_1.z.string().uuid('Guru Id must be a valid UUID'),
});
//# sourceMappingURL=kelas.validation.js.map
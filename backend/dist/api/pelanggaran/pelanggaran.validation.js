"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PelanggaranValidation = void 0;
const zod_1 = require("zod");
class PelanggaranValidation {
}
exports.PelanggaranValidation = PelanggaranValidation;
PelanggaranValidation.CREATE = zod_1.z.object({
    tipePelanggaranId: zod_1.z
        .string()
        .uuid('Tipe Pelanggaran ID must be a valid UUID'),
    siswaId: zod_1.z.string().uuid('Siswa ID must be a valid UUID'),
    keterangan: zod_1.z
        .string()
        .min(1, 'Keterangan must have a minimum of 1 characters'),
});
PelanggaranValidation.UPDATE = zod_1.z.object({
    tipePelanggaranId: zod_1.z
        .string()
        .uuid('Tipe Pelanggaran ID must be a valid UUID'),
    siswaId: zod_1.z.string().uuid('Siswa ID must be a valid UUID'),
    keterangan: zod_1.z
        .string()
        .min(1, 'Keterangan must have a minimum of 1 characters'),
});
//# sourceMappingURL=pelanggaran.validation.js.map
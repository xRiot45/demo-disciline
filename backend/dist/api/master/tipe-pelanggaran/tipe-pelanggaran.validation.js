"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipePelanggaranValidation = void 0;
const zod_1 = require("zod");
class TipePelanggaranValidation {
}
exports.TipePelanggaranValidation = TipePelanggaranValidation;
TipePelanggaranValidation.CREATE = zod_1.z.object({
    nama_tipe_pelanggaran: zod_1.z
        .string()
        .min(2, 'Nama Tipe Pelanggaran must have a minimum of 2 characters')
        .max(50, 'Nama Tipe Pelanggaran must have a maximum of 50 characters'),
});
TipePelanggaranValidation.UPDATE = zod_1.z.object({
    nama_tipe_pelanggaran: zod_1.z
        .string()
        .min(2, 'Nama Tipe Pelanggaran must have a minimum of 2 characters')
        .max(50, 'Nama Tipe Pelanggaran must have a maximum of 50 characters'),
});
//# sourceMappingURL=tipe-pelanggaran.validation.js.map
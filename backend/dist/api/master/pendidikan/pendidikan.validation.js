"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendidikanValidation = void 0;
const zod_1 = require("zod");
class PendidikanValidation {
}
exports.PendidikanValidation = PendidikanValidation;
PendidikanValidation.CREATE = zod_1.z.object({
    nama_pendidikan: zod_1.z
        .string()
        .min(2, 'Nama Pendidikan must have a minimum of 2 characters')
        .max(25, 'Nama Pendidikan must have a maximum of 25 characters'),
});
PendidikanValidation.UPDATE = zod_1.z.object({
    nama_pendidikan: zod_1.z
        .string()
        .min(2, 'Nama Pendidikan must have a minimum of 2 characters')
        .max(25, 'Nama Pendidikan must have a maximum of 25 characters'),
});
//# sourceMappingURL=pendidikan.validation.js.map
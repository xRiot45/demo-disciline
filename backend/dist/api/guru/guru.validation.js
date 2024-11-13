"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuruValidation = void 0;
const zod_1 = require("zod");
class GuruValidation {
}
exports.GuruValidation = GuruValidation;
GuruValidation.CREATE = zod_1.z.object({
    nama_lengkap: zod_1.z
        .string()
        .min(1, 'Nama Lengkap must have a minimum of 1 characters')
        .max(50, 'Nama Lengkap must have a maximum of 50 characters'),
    nip: zod_1.z
        .string()
        .min(1, 'NIP must have a minimum of 1 characters')
        .max(50, 'NIP must have a maximum of 50 characters'),
    statusId: zod_1.z.string().uuid('Status ID must be a valid UUID'),
    jabatanId: zod_1.z.string().uuid('Jabatan ID must be a valid UUID'),
    golonganId: zod_1.z.string().uuid('Golongan ID must be a valid UUID'),
    agamaId: zod_1.z.string().uuid('Agama ID must be a valid UUID'),
    jenis_kelamin: zod_1.z
        .string()
        .min(1, 'Jenis Kelamin must have a minimum of 1 characters')
        .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),
    no_telp: zod_1.z
        .string()
        .min(1, 'No Telp must have a minimum of 1 characters')
        .max(20, 'No Telp must have a maximum of 20 characters'),
    alamat: zod_1.z.string().min(1, 'Alamat must have a minimum of 1 characters'),
});
GuruValidation.UPDATE = zod_1.z.object({
    nama_lengkap: zod_1.z
        .string()
        .min(1, 'Nama Lengkap must have a minimum of 1 characters')
        .max(50, 'Nama Lengkap must have a maximum of 50 characters'),
    nip: zod_1.z
        .string()
        .min(1, 'NIP must have a minimum of 1 characters')
        .max(50, 'NIP must have a maximum of 50 characters'),
    statusId: zod_1.z.string().uuid('Status ID must be a valid UUID'),
    jabatanId: zod_1.z.string().uuid('Jabatan ID must be a valid UUID'),
    golonganId: zod_1.z.string().uuid('Golongan ID must be a valid UUID'),
    agamaId: zod_1.z.string().uuid('Agama ID must be a valid UUID'),
    jenis_kelamin: zod_1.z
        .string()
        .min(1, 'Jenis Kelamin must have a minimum of 1 characters')
        .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),
    no_telp: zod_1.z
        .string()
        .min(1, 'No Telp must have a minimum of 1 characters')
        .max(20, 'No Telp must have a maximum of 20 characters'),
    alamat: zod_1.z.string().min(1, 'Alamat must have a minimum of 1 characters'),
});
//# sourceMappingURL=guru.validation.js.map
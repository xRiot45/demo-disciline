"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiswaValidation = void 0;
const zod_1 = require("zod");
class SiswaValidation {
}
exports.SiswaValidation = SiswaValidation;
SiswaValidation.CREATE = zod_1.z.object({
    nama_lengkap: zod_1.z
        .string()
        .min(2, 'Nama Lengkap must have a minimum of 2 characters')
        .max(50, 'Nama Lengkap must have a maximum of 50 characters'),
    nis: zod_1.z
        .string()
        .min(2, 'NIS must have a minimum of 2 characters')
        .max(20, 'NIS must have a maximum of 20 characters'),
    nisn: zod_1.z
        .string()
        .min(2, 'NISN must have a minimum of 2 characters')
        .max(20, 'NISN must have a maximum of 20 characters'),
    tanggal_lahir: zod_1.z
        .string()
        .min(2, 'Tanggal Lahir must have a minimum of 2 characters')
        .max(50, 'Tanggal Lahir must have a maximum of 50 characters'),
    tempat_lahir: zod_1.z
        .string()
        .min(2, 'Tempat Lahir must have a minimum of 2 characters')
        .max(100, 'Tempat Lahir must have a maximum of 100 characters'),
    jenis_kelamin: zod_1.z
        .string()
        .min(2, 'Jenis Kelamin must have a minimum of 2 characters')
        .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),
    agamaId: zod_1.z.string().uuid('Agama ID must be a valid UUID'),
    kelasId: zod_1.z.string().uuid('Kelas ID must be a valid UUID'),
    nama_wali: zod_1.z
        .string()
        .min(2, 'Nama Wali must have a minimum of 2 characters')
        .max(50, 'Nama Wali must have a maximum of 20 characters'),
    no_telp_wali: zod_1.z
        .string()
        .min(2, 'No Telp Wali must have a minimum of 2 characters')
        .max(20, 'No Telp Wali must have a maximum of 20 characters'),
    alamat: zod_1.z.string().min(1, 'Alamat must have a minimum of 1 characters'),
});
SiswaValidation.UPDATE = zod_1.z.object({
    nama_lengkap: zod_1.z
        .string()
        .min(2, 'Nama Lengkap must have a minimum of 2 characters')
        .max(50, 'Nama Lengkap must have a maximum of 50 characters'),
    nis: zod_1.z
        .string()
        .min(2, 'NIS must have a minimum of 2 characters')
        .max(20, 'NIS must have a maximum of 20 characters'),
    nisn: zod_1.z
        .string()
        .min(2, 'NISN must have a minimum of 2 characters')
        .max(20, 'NISN must have a maximum of 20 characters'),
    tanggal_lahir: zod_1.z
        .string()
        .min(2, 'Tanggal Lahir must have a minimum of 2 characters')
        .max(50, 'Tanggal Lahir must have a maximum of 50 characters'),
    tempat_lahir: zod_1.z
        .string()
        .min(2, 'Tempat Lahir must have a minimum of 2 characters')
        .max(100, 'Tempat Lahir must have a maximum of 100 characters'),
    jenis_kelamin: zod_1.z
        .string()
        .min(2, 'Jenis Kelamin must have a minimum of 2 characters')
        .max(20, 'Jenis Kelamin must have a maximum of 20 characters'),
    agamaId: zod_1.z.string().uuid('Agama ID must be a valid UUID'),
    kelasId: zod_1.z.string().uuid('Kelas ID must be a valid UUID'),
    nama_wali: zod_1.z
        .string()
        .min(2, 'Nama Wali must have a minimum of 2 characters')
        .max(50, 'Nama Wali must have a maximum of 20 characters'),
    no_telp_wali: zod_1.z
        .string()
        .min(2, 'No Telp Wali must have a minimum of 2 characters')
        .max(20, 'No Telp Wali must have a maximum of 20 characters'),
    alamat: zod_1.z.string().min(1, 'Alamat must have a minimum of 1 characters'),
});
//# sourceMappingURL=siswa.validation.js.map
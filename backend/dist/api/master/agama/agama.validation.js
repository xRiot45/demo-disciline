"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgamaValidation = void 0;
const zod_1 = require("zod");
class AgamaValidation {
}
exports.AgamaValidation = AgamaValidation;
AgamaValidation.CREATE = zod_1.z.object({
    nama_agama: zod_1.z
        .string()
        .min(2, 'Nama Agama must have a minimum of 2 characters')
        .max(25, 'Nama Agama must have a maximum of 25 characters'),
});
AgamaValidation.UPDATE = zod_1.z.object({
    nama_agama: zod_1.z
        .string()
        .min(2, 'Nama Agama must have a minimum of 2 characters')
        .max(25, 'Nama Agama must have a maximum of 25 characters'),
});
//# sourceMappingURL=agama.validation.js.map
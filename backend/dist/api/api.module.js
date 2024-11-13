"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const guru_module_1 = require("./guru/guru.module");
const users_module_1 = require("./users/users.module");
const agama_module_1 = require("./master/agama/agama.module");
const kelas_module_1 = require("./kelas/kelas.module");
const siswa_module_1 = require("./siswa/siswa.module");
const status_module_1 = require("./master/status/status.module");
const jabatan_module_1 = require("./master/jabatan/jabatan.module");
const jurusan_module_1 = require("./master/jurusan/jurusan.module");
const golongan_module_1 = require("./master/golongan/golongan.module");
const pendidikan_module_1 = require("./master/pendidikan/pendidikan.module");
const pelanggaran_module_1 = require("./pelanggaran/pelanggaran.module");
const tipe_pelanggaran_module_1 = require("./master/tipe-pelanggaran/tipe-pelanggaran.module");
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            agama_module_1.AgamaModule,
            tipe_pelanggaran_module_1.TipePelanggaranModule,
            status_module_1.StatusModule,
            jabatan_module_1.JabatanModule,
            golongan_module_1.GolonganModule,
            pendidikan_module_1.PendidikanModule,
            jurusan_module_1.JurusanModule,
            guru_module_1.GuruModule,
            kelas_module_1.KelasModule,
            siswa_module_1.SiswaModule,
            pelanggaran_module_1.PelanggaranModule,
        ],
    })
], ApiModule);
//# sourceMappingURL=api.module.js.map
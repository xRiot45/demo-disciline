"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipePelanggaranModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("../../../api/users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const tipe_pelanggaran_entity_1 = require("./entities/tipe-pelanggaran.entity");
const validation_service_1 = require("../../../common/validation/validation.service");
const tipe_pelanggaran_service_1 = require("./tipe-pelanggaran.service");
const tipe_pelanggaran_controller_1 = require("./tipe-pelanggaran.controller");
let TipePelanggaranModule = class TipePelanggaranModule {
};
exports.TipePelanggaranModule = TipePelanggaranModule;
exports.TipePelanggaranModule = TipePelanggaranModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipe_pelanggaran_entity_1.TipePelanggaran]), users_module_1.UsersModule],
        controllers: [tipe_pelanggaran_controller_1.TipePelanggaranController],
        providers: [tipe_pelanggaran_service_1.TipePelanggaranService, validation_service_1.ValidationService],
    })
], TipePelanggaranModule);
//# sourceMappingURL=tipe-pelanggaran.module.js.map
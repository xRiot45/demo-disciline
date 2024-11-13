"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PelanggaranModule = void 0;
const common_1 = require("@nestjs/common");
const pelanggaran_entity_1 = require("./entities/pelanggaran.entity");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const validation_service_1 = require("../../common/validation/validation.service");
const pelanggaran_service_1 = require("./pelanggaran.service");
const pelanggaran_controller_1 = require("./pelanggaran.controller");
let PelanggaranModule = class PelanggaranModule {
};
exports.PelanggaranModule = PelanggaranModule;
exports.PelanggaranModule = PelanggaranModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pelanggaran_entity_1.Pelanggaran]), users_module_1.UsersModule],
        controllers: [pelanggaran_controller_1.PelanggaranController],
        providers: [pelanggaran_service_1.PelanggaranService, validation_service_1.ValidationService],
    })
], PelanggaranModule);
//# sourceMappingURL=pelanggaran.module.js.map
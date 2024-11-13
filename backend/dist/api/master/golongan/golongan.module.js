"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GolonganModule = void 0;
const common_1 = require("@nestjs/common");
const golongan_entity_1 = require("./entities/golongan.entity");
const users_module_1 = require("../../../api/users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const golongan_service_1 = require("./golongan.service");
const validation_service_1 = require("../../../common/validation/validation.service");
const golongan_controller_1 = require("./golongan.controller");
let GolonganModule = class GolonganModule {
};
exports.GolonganModule = GolonganModule;
exports.GolonganModule = GolonganModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([golongan_entity_1.Golongan]), users_module_1.UsersModule],
        controllers: [golongan_controller_1.GolonganController],
        providers: [golongan_service_1.GolonganService, validation_service_1.ValidationService],
    })
], GolonganModule);
//# sourceMappingURL=golongan.module.js.map
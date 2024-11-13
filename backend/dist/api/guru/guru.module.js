"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuruModule = void 0;
const guru_entity_1 = require("./entities/guru.entity");
const common_1 = require("@nestjs/common");
const guru_service_1 = require("./guru.service");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const guru_controller_1 = require("./guru.controller");
const validation_service_1 = require("../../common/validation/validation.service");
let GuruModule = class GuruModule {
};
exports.GuruModule = GuruModule;
exports.GuruModule = GuruModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([guru_entity_1.Guru]), users_module_1.UsersModule],
        controllers: [guru_controller_1.GuruController],
        providers: [guru_service_1.GuruService, validation_service_1.ValidationService],
    })
], GuruModule);
//# sourceMappingURL=guru.module.js.map
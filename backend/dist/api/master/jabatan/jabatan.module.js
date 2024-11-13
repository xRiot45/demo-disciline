"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JabatanModule = void 0;
const common_1 = require("@nestjs/common");
const jabatan_entity_1 = require("./entities/jabatan.entity");
const users_module_1 = require("../../../api/users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const jabatan_service_1 = require("./jabatan.service");
const jabatan_controller_1 = require("./jabatan.controller");
const validation_service_1 = require("../../../common/validation/validation.service");
let JabatanModule = class JabatanModule {
};
exports.JabatanModule = JabatanModule;
exports.JabatanModule = JabatanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([jabatan_entity_1.Jabatan]), users_module_1.UsersModule],
        controllers: [jabatan_controller_1.JabatanController],
        providers: [jabatan_service_1.JabatanService, validation_service_1.ValidationService],
    })
], JabatanModule);
//# sourceMappingURL=jabatan.module.js.map
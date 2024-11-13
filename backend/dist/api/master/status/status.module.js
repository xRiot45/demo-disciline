"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusModule = void 0;
const status_entity_1 = require("./entities/status.entity");
const common_1 = require("@nestjs/common");
const users_module_1 = require("../../../api/users/users.module");
const status_service_1 = require("./status.service");
const typeorm_1 = require("@nestjs/typeorm");
const status_controller_1 = require("./status.controller");
const validation_service_1 = require("../../../common/validation/validation.service");
let StatusModule = class StatusModule {
};
exports.StatusModule = StatusModule;
exports.StatusModule = StatusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([status_entity_1.Status]), users_module_1.UsersModule],
        controllers: [status_controller_1.StatusController],
        providers: [status_service_1.StatusService, validation_service_1.ValidationService],
    })
], StatusModule);
//# sourceMappingURL=status.module.js.map
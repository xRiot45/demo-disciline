"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const error_filter_1 = require("./error/error.filter");
const database_module_1 = require("./database/database.module");
const throttler_1 = require("@nestjs/throttler");
const validation_service_1 = require("./validation/validation.service");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
let CommonModule = class CommonModule {
    configure(consumer) {
        consumer.apply().forRoutes({
            path: '/api/*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
exports.CommonModule = CommonModule;
exports.CommonModule = CommonModule = __decorate([
    (0, common_1.Module)({
        exports: [validation_service_1.ValidationService],
        imports: [database_module_1.DatabaseModule],
        controllers: [],
        providers: [
            database_module_1.DatabaseModule,
            validation_service_1.ValidationService,
            {
                provide: core_1.APP_FILTER,
                useClass: error_filter_1.ErrorFilter,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map
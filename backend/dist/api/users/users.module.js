"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../../common/strategy/jwt.strategy");
const users_service_1 = require("./users.service");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const users_controller_1 = require("./users.controller");
const validation_service_1 = require("../../common/validation/validation.service");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        exports: [jwt_strategy_1.JwtStrategy, jwt_1.JwtModule],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.Users]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: `${process.env.JWT_SECRET}`,
                signOptions: {
                    expiresIn: 60 * 60 * 24,
                },
            }),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, validation_service_1.ValidationService, jwt_strategy_1.JwtStrategy],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map
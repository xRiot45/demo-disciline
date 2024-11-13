"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("typeorm");
const users_validation_1 = require("./users.validation");
const validation_service_1 = require("../../common/validation/validation.service");
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(entityManager, validationService, jwtService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
        this.jwtService = jwtService;
    }
    async signUp(req) {
        const signupRequest = this.validationService.validate(users_validation_1.UsersValidation.SIGNUP, req);
        const usernameExists = await this.entityManager.findOne(user_entity_1.Users, {
            where: {
                username: signupRequest.username,
            },
        });
        if (usernameExists) {
            throw new common_1.HttpException('Username already exists', common_1.HttpStatus.CONFLICT);
        }
        signupRequest.password = await bcrypt.hash(signupRequest.password, 12);
        signupRequest.role = 'admin';
        const user = new user_entity_1.Users({
            ...signupRequest,
        });
        const signupUsers = await this.entityManager.save(user);
        return {
            data: {
                id: signupUsers.id,
                username: signupUsers.username,
                role: signupUsers.role,
            },
        };
    }
    async signIn(req) {
        const signinRequest = this.validationService.validate(users_validation_1.UsersValidation.SIGNIN, req);
        const user = await this.entityManager.findOne(user_entity_1.Users, {
            where: {
                username: signinRequest.username,
            },
        });
        if (user && (await bcrypt.compare(signinRequest.password, user.password))) {
            const payload = {
                id: user.id,
                username: user.username,
                role: user.role,
            };
            const token = this.jwtService.sign(payload);
            return {
                data: {
                    accessToken: token,
                },
            };
        }
        else {
            throw new common_1.HttpException('Username or Password Invalid', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async getUser(user) {
        const dataUser = await this.entityManager.findOne(user_entity_1.Users, {
            where: {
                id: user.id,
            },
        });
        return {
            data: {
                id: dataUser.id,
                username: dataUser.username,
                role: dataUser.role,
            },
        };
    }
    async updatePassword(user, req) {
        const updateRequest = this.validationService.validate(users_validation_1.UsersValidation.UPDATE, req);
        const findUser = await this.entityManager.findOne(user_entity_1.Users, {
            where: { id: user.id },
        });
        if (findUser.password) {
            user.password = await bcrypt.hash(updateRequest.password, 12);
        }
        await this.entityManager.update(user_entity_1.Users, findUser.id, {
            password: user.password,
        });
        return {
            message: 'Password updated',
        };
    }
    async signOut(user) {
        const signOutRequest = await this.entityManager.findOne(user_entity_1.Users, {
            where: { id: user.id },
        });
        if (!signOutRequest) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            message: 'Sign out success',
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map
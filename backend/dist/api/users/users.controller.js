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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const user_entity_1 = require("./entities/user.entity");
const auth_guard_1 = require("../../common/guard/auth.guard");
const users_service_1 = require("./users.service");
const auth_decorator_1 = require("../../common/decorator/auth.decorator");
const swagger_1 = require("@nestjs/swagger");
const users_dto_1 = require("./dto/users.dto");
const common_1 = require("@nestjs/common");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async signUp(req) {
        return this.usersService.signUp(req);
    }
    async signIn(req) {
        return this.usersService.signIn(req);
    }
    async getUsers(user) {
        return this.usersService.getUser(user);
    }
    async updatePassword(user, req) {
        return this.usersService.updatePassword(user, req);
    }
    async signOut(user) {
        return await this.usersService.signOut(user);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('/signup'),
    (0, swagger_1.ApiOperation)({
        summary: 'Sign Up user',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.SignUpUsersRequest]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/signin'),
    (0, swagger_1.ApiOperation)({
        summary: 'Sign In user',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.SignInUsersRequest]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data user',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_decorator_1.AuthDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Put)('/update-password'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Password user',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_decorator_1.AuthDecorator)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Users,
        users_dto_1.UpdatePasswordRequest]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Delete)('/signout'),
    (0, swagger_1.ApiOperation)({
        summary: 'Sign Out user',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_decorator_1.AuthDecorator)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signOut", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('/api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map
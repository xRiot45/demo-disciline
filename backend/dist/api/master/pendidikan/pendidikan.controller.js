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
exports.PendidikanController = void 0;
const auth_guard_1 = require("../../../common/guard/auth.guard");
const admin_guard_1 = require("../../../common/guard/admin.guard");
const pendidikan_service_1 = require("./pendidikan.service");
const pendidikan_dto_1 = require("./dto/pendidikan.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let PendidikanController = class PendidikanController {
    constructor(pendidikanService) {
        this.pendidikanService = pendidikanService;
    }
    async create(req) {
        return this.pendidikanService.create(req);
    }
    async findAll() {
        return this.pendidikanService.findAll();
    }
    async findById(pendidikanId) {
        return this.pendidikanService.findById(pendidikanId);
    }
    async update(pendidikanId, req) {
        return this.pendidikanService.update(pendidikanId, req);
    }
    async delete(pendidikanId) {
        return this.pendidikanService.delete(pendidikanId);
    }
};
exports.PendidikanController = PendidikanController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Pendidikan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pendidikan_dto_1.PendidikanRequest]),
    __metadata("design:returntype", Promise)
], PendidikanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Pendidikan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PendidikanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:pendidikanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Pendidikan By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('pendidikanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PendidikanController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:pendidikanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Pendidikan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('pendidikanId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pendidikan_dto_1.PendidikanRequest]),
    __metadata("design:returntype", Promise)
], PendidikanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:pendidikanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Pendidikan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('pendidikanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PendidikanController.prototype, "delete", null);
exports.PendidikanController = PendidikanController = __decorate([
    (0, swagger_1.ApiTags)('Pendidikan'),
    (0, common_1.Controller)('/api/master/pendidikan'),
    __metadata("design:paramtypes", [pendidikan_service_1.PendidikanService])
], PendidikanController);
//# sourceMappingURL=pendidikan.controller.js.map
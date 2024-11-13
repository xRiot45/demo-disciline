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
exports.GuruController = void 0;
const auth_guard_1 = require("../../common/guard/auth.guard");
const admin_guard_1 = require("../../common/guard/admin.guard");
const guru_service_1 = require("./guru.service");
const guru_dto_1 = require("./dto/guru.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let GuruController = class GuruController {
    constructor(guruService) {
        this.guruService = guruService;
    }
    async create(req) {
        return this.guruService.create(req);
    }
    async findAll() {
        return this.guruService.findAll();
    }
    async findById(guruId) {
        return this.guruService.findById(guruId);
    }
    async update(guruId, req) {
        return this.guruService.update(guruId, req);
    }
    async delete(guruId) {
        return this.guruService.delete(guruId);
    }
};
exports.GuruController = GuruController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Guru',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [guru_dto_1.GuruRequest]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Guru',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:guruId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Guru By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('guruId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)('/:guruId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Guru',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('guruId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, guru_dto_1.GuruRequest]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:guruId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Guru',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('guruId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GuruController.prototype, "delete", null);
exports.GuruController = GuruController = __decorate([
    (0, swagger_1.ApiTags)('Guru'),
    (0, common_1.Controller)('/api/guru'),
    __metadata("design:paramtypes", [guru_service_1.GuruService])
], GuruController);
//# sourceMappingURL=guru.controller.js.map
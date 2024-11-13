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
exports.GolonganController = void 0;
const auth_guard_1 = require("../../../common/guard/auth.guard");
const admin_guard_1 = require("../../../common/guard/admin.guard");
const golongan_service_1 = require("./golongan.service");
const golongan_dto_1 = require("./dto/golongan.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let GolonganController = class GolonganController {
    constructor(golonganService) {
        this.golonganService = golonganService;
    }
    async create(req) {
        return this.golonganService.create(req);
    }
    async findAll() {
        return this.golonganService.findAll();
    }
    async findById(golonganId) {
        return this.golonganService.findById(golonganId);
    }
    async update(golonganId, req) {
        return this.golonganService.update(golonganId, req);
    }
    async delete(golonganId) {
        return this.golonganService.delete(golonganId);
    }
};
exports.GolonganController = GolonganController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Golongan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [golongan_dto_1.GolonganRequest]),
    __metadata("design:returntype", Promise)
], GolonganController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Golongan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GolonganController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:golonganId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Golongan By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('golonganId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GolonganController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:golonganId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Golongan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('golonganId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, golongan_dto_1.GolonganRequest]),
    __metadata("design:returntype", Promise)
], GolonganController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:golonganId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Golongan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('golonganId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GolonganController.prototype, "delete", null);
exports.GolonganController = GolonganController = __decorate([
    (0, swagger_1.ApiTags)('Golongan'),
    (0, common_1.Controller)('/api/master/golongan'),
    __metadata("design:paramtypes", [golongan_service_1.GolonganService])
], GolonganController);
//# sourceMappingURL=golongan.controller.js.map
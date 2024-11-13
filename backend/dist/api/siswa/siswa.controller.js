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
exports.SiswaController = void 0;
const auth_guard_1 = require("../../common/guard/auth.guard");
const admin_guard_1 = require("../../common/guard/admin.guard");
const siswa_service_1 = require("./siswa.service");
const siswa_dto_1 = require("./dto/siswa.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let SiswaController = class SiswaController {
    constructor(siswaService) {
        this.siswaService = siswaService;
    }
    async create(req) {
        return this.siswaService.create(req);
    }
    async findAll() {
        return this.siswaService.findAll();
    }
    async findById(siswaId) {
        return this.siswaService.findById(siswaId);
    }
    async update(siswaId, req) {
        return this.siswaService.update(siswaId, req);
    }
    async delete(siswaId) {
        return this.siswaService.delete(siswaId);
    }
};
exports.SiswaController = SiswaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Siswa',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [siswa_dto_1.SiswaRequest]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Siswa',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:siswaId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Siswa By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('siswaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)('/:siswaId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Data Siswa',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('siswaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, siswa_dto_1.SiswaRequest]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:siswaId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Data Siswa',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('siswaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SiswaController.prototype, "delete", null);
exports.SiswaController = SiswaController = __decorate([
    (0, swagger_1.ApiTags)('Siswa'),
    (0, common_1.Controller)('/api/siswa'),
    __metadata("design:paramtypes", [siswa_service_1.SiswaService])
], SiswaController);
//# sourceMappingURL=siswa.controller.js.map
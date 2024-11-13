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
exports.PelanggaranController = void 0;
const auth_guard_1 = require("../../common/guard/auth.guard");
const admin_guard_1 = require("../../common/guard/admin.guard");
const pelanggaran_service_1 = require("./pelanggaran.service");
const swagger_1 = require("@nestjs/swagger");
const pelanggaran_dto_1 = require("./dto/pelanggaran.dto");
const common_1 = require("@nestjs/common");
let PelanggaranController = class PelanggaranController {
    constructor(pelanggaranService) {
        this.pelanggaranService = pelanggaranService;
    }
    async create(req) {
        return this.pelanggaranService.create(req);
    }
    async findAll() {
        return this.pelanggaranService.findAll();
    }
    async findById(pelanggaranId) {
        return this.pelanggaranService.findById(pelanggaranId);
    }
    async update(pelanggaranId, req) {
        return this.pelanggaranService.update(pelanggaranId, req);
    }
};
exports.PelanggaranController = PelanggaranController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Pelanggaran',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pelanggaran_dto_1.PelanggaranRequest]),
    __metadata("design:returntype", Promise)
], PelanggaranController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Pelanggaran',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PelanggaranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:pelanggaranId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Pelanggaran By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('pelanggaranId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PelanggaranController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)('/:pelanggaranId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Pelanggaran',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('pelanggaranId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pelanggaran_dto_1.PelanggaranRequest]),
    __metadata("design:returntype", Promise)
], PelanggaranController.prototype, "update", null);
exports.PelanggaranController = PelanggaranController = __decorate([
    (0, swagger_1.ApiTags)('Pelanggaran'),
    (0, common_1.Controller)('/api/pelanggaran'),
    __metadata("design:paramtypes", [pelanggaran_service_1.PelanggaranService])
], PelanggaranController);
//# sourceMappingURL=pelanggaran.controller.js.map
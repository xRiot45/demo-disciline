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
exports.TipePelanggaranController = void 0;
const auth_guard_1 = require("../../../common/guard/auth.guard");
const admin_guard_1 = require("../../../common/guard/admin.guard");
const tipe_pelanggaran_service_1 = require("./tipe-pelanggaran.service");
const swagger_1 = require("@nestjs/swagger");
const tipe_pelanggaran_dto_1 = require("./dto/tipe-pelanggaran.dto");
const common_1 = require("@nestjs/common");
let TipePelanggaranController = class TipePelanggaranController {
    constructor(tipePelanggaranService) {
        this.tipePelanggaranService = tipePelanggaranService;
    }
    async create(req) {
        return this.tipePelanggaranService.create(req);
    }
    async findAll() {
        return this.tipePelanggaranService.findAll();
    }
    async findById(tipePelanggaranId) {
        return this.tipePelanggaranService.findById(tipePelanggaranId);
    }
    async update(tipePelanggaranId, req) {
        return this.tipePelanggaranService.update(tipePelanggaranId, req);
    }
    async delete(tipePelanggaranId) {
        return this.tipePelanggaranService.delete(tipePelanggaranId);
    }
};
exports.TipePelanggaranController = TipePelanggaranController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Tipe Pelanggaran',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard, auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tipe_pelanggaran_dto_1.TipePelanggaranRequest]),
    __metadata("design:returntype", Promise)
], TipePelanggaranController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Tipe Pelanggaran',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipePelanggaranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:tipePelanggaranId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Tipe Pelanggaran By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('tipePelanggaranId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipePelanggaranController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:tipePelanggaranId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Tipe Pelanggaran',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard, auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('tipePelanggaranId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tipe_pelanggaran_dto_1.TipePelanggaranRequest]),
    __metadata("design:returntype", Promise)
], TipePelanggaranController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:tipePelanggaranId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Tipe Pelanggaran',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard, auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('tipePelanggaranId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TipePelanggaranController.prototype, "delete", null);
exports.TipePelanggaranController = TipePelanggaranController = __decorate([
    (0, swagger_1.ApiTags)('Tipe Pelanggaran'),
    (0, common_1.Controller)('/api/master/tipe-pelanggaran'),
    __metadata("design:paramtypes", [tipe_pelanggaran_service_1.TipePelanggaranService])
], TipePelanggaranController);
//# sourceMappingURL=tipe-pelanggaran.controller.js.map
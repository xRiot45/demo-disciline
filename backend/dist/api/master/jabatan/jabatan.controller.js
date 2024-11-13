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
exports.JabatanController = void 0;
const auth_guard_1 = require("../../../common/guard/auth.guard");
const admin_guard_1 = require("../../../common/guard/admin.guard");
const jabatan_service_1 = require("./jabatan.service");
const jabatan_dto_1 = require("./dto/jabatan.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let JabatanController = class JabatanController {
    constructor(jabatanService) {
        this.jabatanService = jabatanService;
    }
    async create(req) {
        return this.jabatanService.create(req);
    }
    async findAll() {
        return this.jabatanService.findAll();
    }
    async findById(jabatanId) {
        return this.jabatanService.findById(jabatanId);
    }
    async update(jabatanId, req) {
        return this.jabatanService.update(jabatanId, req);
    }
    async delete(jabatanId) {
        return this.jabatanService.delete(jabatanId);
    }
};
exports.JabatanController = JabatanController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Jabatan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jabatan_dto_1.JabatanRequest]),
    __metadata("design:returntype", Promise)
], JabatanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Jabatan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JabatanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:jabatanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Jabatan By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('jabatanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JabatanController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:jabatanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Jabatan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('jabatanId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, jabatan_dto_1.JabatanRequest]),
    __metadata("design:returntype", Promise)
], JabatanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:jabatanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Jabatan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('jabatanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JabatanController.prototype, "delete", null);
exports.JabatanController = JabatanController = __decorate([
    (0, swagger_1.ApiTags)('Jabatan'),
    (0, common_1.Controller)('/api/master/jabatan'),
    __metadata("design:paramtypes", [jabatan_service_1.JabatanService])
], JabatanController);
//# sourceMappingURL=jabatan.controller.js.map
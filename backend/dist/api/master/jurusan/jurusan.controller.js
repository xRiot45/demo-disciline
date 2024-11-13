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
exports.JurusanController = void 0;
const auth_guard_1 = require("../../../common/guard/auth.guard");
const admin_guard_1 = require("../../../common/guard/admin.guard");
const jurusan_service_1 = require("./jurusan.service");
const jurusan_dto_1 = require("./dto/jurusan.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let JurusanController = class JurusanController {
    constructor(jurusanService) {
        this.jurusanService = jurusanService;
    }
    async create(req) {
        return this.jurusanService.create(req);
    }
    async findAll() {
        return this.jurusanService.findAll();
    }
    async findById(jurusanId) {
        return this.jurusanService.findById(jurusanId);
    }
    async update(jurusanId, req) {
        return this.jurusanService.update(jurusanId, req);
    }
    async delete(jurusanId) {
        return this.jurusanService.delete(jurusanId);
    }
};
exports.JurusanController = JurusanController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Jurusan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jurusan_dto_1.JurusanRequest]),
    __metadata("design:returntype", Promise)
], JurusanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Jurusan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JurusanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:jurusanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Jurusan By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('jurusanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JurusanController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:jurusanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Jurusan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('jurusanId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, jurusan_dto_1.JurusanRequest]),
    __metadata("design:returntype", Promise)
], JurusanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:jurusanId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Jurusan',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('jurusanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JurusanController.prototype, "delete", null);
exports.JurusanController = JurusanController = __decorate([
    (0, swagger_1.ApiTags)('Jurusan'),
    (0, common_1.Controller)('/api/master/jurusan'),
    __metadata("design:paramtypes", [jurusan_service_1.JurusanService])
], JurusanController);
//# sourceMappingURL=jurusan.controller.js.map
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
exports.AgamaController = void 0;
const auth_guard_1 = require("../../../common/guard/auth.guard");
const admin_guard_1 = require("../../../common/guard/admin.guard");
const agama_service_1 = require("./agama.service");
const agama_dto_1 = require("./dto/agama.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let AgamaController = class AgamaController {
    constructor(agamaService) {
        this.agamaService = agamaService;
    }
    async create(req) {
        return this.agamaService.create(req);
    }
    async findAll() {
        return this.agamaService.findAll();
    }
    async findById(agamaId) {
        return this.agamaService.findById(agamaId);
    }
    async update(agamaId, req) {
        return this.agamaService.update(agamaId, req);
    }
    async delete(agamaId) {
        return this.agamaService.delete(agamaId);
    }
};
exports.AgamaController = AgamaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Agama',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard, auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agama_dto_1.AgamaRequest]),
    __metadata("design:returntype", Promise)
], AgamaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Agama',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgamaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:agamaId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Agama By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('agamaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgamaController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:agamaId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Agama',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard, auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('agamaId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, agama_dto_1.AgamaRequest]),
    __metadata("design:returntype", Promise)
], AgamaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:agamaId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Agama',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard, auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('agamaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgamaController.prototype, "delete", null);
exports.AgamaController = AgamaController = __decorate([
    (0, swagger_1.ApiTags)('Agama'),
    (0, common_1.Controller)('/api/master/agama'),
    __metadata("design:paramtypes", [agama_service_1.AgamaService])
], AgamaController);
//# sourceMappingURL=agama.controller.js.map
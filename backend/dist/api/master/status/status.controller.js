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
exports.StatusController = void 0;
const auth_guard_1 = require("../../../common/guard/auth.guard");
const admin_guard_1 = require("../../../common/guard/admin.guard");
const status_service_1 = require("./status.service");
const status_dto_1 = require("./dto/status.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let StatusController = class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
    }
    async create(req) {
        return this.statusService.create(req);
    }
    async findAll() {
        return this.statusService.findAll();
    }
    async findById(statusId) {
        return this.statusService.findById(statusId);
    }
    async update(statusId, req) {
        return this.statusService.update(statusId, req);
    }
    async delete(statusId) {
        return this.statusService.delete(statusId);
    }
};
exports.StatusController = StatusController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create Status',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_dto_1.StatusRequest]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get All Data Status',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:statusId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get Data Status By ID',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('statusId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:statusId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update Status',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('statusId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, status_dto_1.StatusRequest]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:statusId'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete Status',
    }),
    (0, swagger_1.ApiSecurity)('bearer'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('statusId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "delete", null);
exports.StatusController = StatusController = __decorate([
    (0, swagger_1.ApiTags)('Status'),
    (0, common_1.Controller)('/api/master/status'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
//# sourceMappingURL=status.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
const status_entity_1 = require("./entities/status.entity");
const typeorm_1 = require("typeorm");
const status_validation_1 = require("./status.validation");
const validation_service_1 = require("../../../common/validation/validation.service");
const common_1 = require("@nestjs/common");
let StatusService = class StatusService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(status_validation_1.StatusValidation.CREATE, req);
        const statusExists = await this.entityManager.findOne(status_entity_1.Status, {
            where: {
                nama_status: createRequest.nama_status,
            },
        });
        if (statusExists) {
            throw new common_1.HttpException('Status already exists', common_1.HttpStatus.CONFLICT);
        }
        const status = new status_entity_1.Status(createRequest);
        await this.entityManager.save(status);
        return {
            data: {
                id: status.id,
                nama_status: status.nama_status,
            },
        };
    }
    async findAll() {
        const statuses = await this.entityManager.find(status_entity_1.Status, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: statuses.map((status) => ({
                id: status.id,
                nama_status: status.nama_status,
            })),
        };
    }
    async findById(statusId) {
        const status = await this.entityManager.findOne(status_entity_1.Status, {
            where: {
                id: statusId,
            },
        });
        if (!status) {
            throw new common_1.HttpException('Status not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: status.id,
                nama_status: status.nama_status,
            },
        };
    }
    async update(statusId, req) {
        const updateRequest = this.validationService.validate(status_validation_1.StatusValidation.UPDATE, req);
        const status = await this.entityManager.findOne(status_entity_1.Status, {
            where: {
                id: statusId,
            },
        });
        if (!status) {
            throw new common_1.HttpException('Status not found', common_1.HttpStatus.NOT_FOUND);
        }
        const statusWithSameName = await this.entityManager.findOne(status_entity_1.Status, {
            where: {
                nama_status: updateRequest.nama_status,
            },
        });
        if (statusWithSameName && statusWithSameName.id !== status.id) {
            throw new common_1.HttpException('Status already exists', common_1.HttpStatus.CONFLICT);
        }
        await this.entityManager.update(status_entity_1.Status, status.id, updateRequest);
        const updatedStatus = await this.entityManager.findOne(status_entity_1.Status, {
            where: {
                id: status.id,
            },
        });
        return {
            data: {
                id: updatedStatus.id,
                nama_status: updatedStatus.nama_status,
            },
        };
    }
    async delete(statusId) {
        const status = await this.entityManager.findOne(status_entity_1.Status, {
            where: {
                id: statusId,
            },
        });
        if (!status) {
            throw new common_1.HttpException('Status not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(status_entity_1.Status, status.id);
        return {
            message: 'Status deleted successfully!',
        };
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], StatusService);
//# sourceMappingURL=status.service.js.map
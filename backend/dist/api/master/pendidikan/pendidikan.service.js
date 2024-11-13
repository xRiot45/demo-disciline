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
exports.PendidikanService = void 0;
const pendidikan_entity_1 = require("./entities/pendidikan.entity");
const typeorm_1 = require("typeorm");
const validation_service_1 = require("../../../common/validation/validation.service");
const pendidikan_validation_1 = require("./pendidikan.validation");
const common_1 = require("@nestjs/common");
let PendidikanService = class PendidikanService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(pendidikan_validation_1.PendidikanValidation.CREATE, req);
        const pendidikanExists = await this.entityManager.findOne(pendidikan_entity_1.Pendidikan, {
            where: {
                nama_pendidikan: createRequest.nama_pendidikan,
            },
        });
        if (pendidikanExists) {
            throw new common_1.HttpException('Pendidikan already exists', common_1.HttpStatus.CONFLICT);
        }
        const pendidikan = new pendidikan_entity_1.Pendidikan(createRequest);
        await this.entityManager.save(pendidikan);
        return {
            data: {
                id: pendidikan.id,
                nama_pendidikan: pendidikan.nama_pendidikan,
            },
        };
    }
    async findAll() {
        const pendidikan = await this.entityManager.find(pendidikan_entity_1.Pendidikan, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: pendidikan.map((item) => ({
                id: item.id,
                nama_pendidikan: item.nama_pendidikan,
            })),
        };
    }
    async findById(pendidikanId) {
        const pendidikan = await this.entityManager.findOne(pendidikan_entity_1.Pendidikan, {
            where: {
                id: pendidikanId,
            },
        });
        if (!pendidikan) {
            throw new common_1.HttpException('Pendidikan not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: pendidikan.id,
                nama_pendidikan: pendidikan.nama_pendidikan,
            },
        };
    }
    async update(pendidikanId, req) {
        const updateRequest = this.validationService.validate(pendidikan_validation_1.PendidikanValidation.UPDATE, req);
        const pendidikan = await this.entityManager.findOne(pendidikan_entity_1.Pendidikan, {
            where: {
                id: pendidikanId,
            },
        });
        if (!pendidikan) {
            throw new common_1.HttpException('Pendidikan not found', common_1.HttpStatus.NOT_FOUND);
        }
        const pendidikanWithSameName = await this.entityManager.findOne(pendidikan_entity_1.Pendidikan, {
            where: {
                nama_pendidikan: updateRequest.nama_pendidikan,
            },
        });
        if (pendidikanWithSameName && pendidikanWithSameName.id !== pendidikan.id) {
            throw new common_1.HttpException('Pendidikan already exists', common_1.HttpStatus.CONFLICT);
        }
        await this.entityManager.update(pendidikan_entity_1.Pendidikan, pendidikan.id, updateRequest);
        const updatedPendidikan = await this.entityManager.findOne(pendidikan_entity_1.Pendidikan, {
            where: {
                id: pendidikan.id,
            },
        });
        return {
            data: {
                id: updatedPendidikan.id,
                nama_pendidikan: updatedPendidikan.nama_pendidikan,
            },
        };
    }
    async delete(pendidikanId) {
        const pendidikan = await this.entityManager.findOne(pendidikan_entity_1.Pendidikan, {
            where: {
                id: pendidikanId,
            },
        });
        if (!pendidikan) {
            throw new common_1.HttpException('Pendidikan not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(pendidikan_entity_1.Pendidikan, pendidikan.id);
        return {
            message: 'Pendidikan deleted successfully!',
        };
    }
};
exports.PendidikanService = PendidikanService;
exports.PendidikanService = PendidikanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], PendidikanService);
//# sourceMappingURL=pendidikan.service.js.map
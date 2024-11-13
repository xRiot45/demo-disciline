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
exports.AgamaService = void 0;
const agama_entity_1 = require("./entities/agama.entity");
const typeorm_1 = require("typeorm");
const agama_validation_1 = require("./agama.validation");
const validation_service_1 = require("../../../common/validation/validation.service");
const common_1 = require("@nestjs/common");
let AgamaService = class AgamaService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(agama_validation_1.AgamaValidation.CREATE, req);
        const agamaExists = await this.entityManager.findOne(agama_entity_1.Agama, {
            where: {
                nama_agama: createRequest.nama_agama,
            },
        });
        if (agamaExists) {
            throw new common_1.HttpException('Agama already exists', common_1.HttpStatus.CONFLICT);
        }
        const agama = new agama_entity_1.Agama(createRequest);
        await this.entityManager.save(agama);
        return {
            data: {
                id: agama.id,
                nama_agama: agama.nama_agama,
            },
        };
    }
    async findAll() {
        const agama = await this.entityManager.find(agama_entity_1.Agama, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: agama.map((agama) => ({
                id: agama.id,
                nama_agama: agama.nama_agama,
            })),
        };
    }
    async findById(agamaId) {
        const agama = await this.entityManager.findOne(agama_entity_1.Agama, {
            where: {
                id: agamaId,
            },
        });
        if (!agama) {
            throw new common_1.HttpException('Agama not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: agama.id,
                nama_agama: agama.nama_agama,
            },
        };
    }
    async update(agamaId, req) {
        const updateRequest = this.validationService.validate(agama_validation_1.AgamaValidation.UPDATE, req);
        const agama = await this.entityManager.findOne(agama_entity_1.Agama, {
            where: {
                id: agamaId,
            },
        });
        if (!agama) {
            throw new common_1.HttpException('Agama not found', common_1.HttpStatus.NOT_FOUND);
        }
        const agamaWithSameName = await this.entityManager.findOne(agama_entity_1.Agama, {
            where: {
                nama_agama: updateRequest.nama_agama,
            },
        });
        if (agamaWithSameName && agamaWithSameName.id !== agama.id) {
            throw new common_1.HttpException('Agama already exists', common_1.HttpStatus.CONFLICT);
        }
        await this.entityManager.update(agama_entity_1.Agama, agama.id, updateRequest);
        const updatedAgama = await this.entityManager.findOne(agama_entity_1.Agama, {
            where: {
                id: agama.id,
            },
        });
        return {
            data: {
                id: updatedAgama.id,
                nama_agama: updatedAgama.nama_agama,
            },
        };
    }
    async delete(agamaId) {
        const agama = await this.entityManager.findOne(agama_entity_1.Agama, {
            where: {
                id: agamaId,
            },
        });
        if (!agama) {
            throw new common_1.HttpException('Agama not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(agama_entity_1.Agama, agama.id);
        return {
            message: 'Agama deleted successfully!',
        };
    }
};
exports.AgamaService = AgamaService;
exports.AgamaService = AgamaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], AgamaService);
//# sourceMappingURL=agama.service.js.map
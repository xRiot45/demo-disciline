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
exports.GolonganService = void 0;
const golongan_entity_1 = require("./entities/golongan.entity");
const typeorm_1 = require("typeorm");
const validation_service_1 = require("../../../common/validation/validation.service");
const golongan_validation_1 = require("./golongan.validation");
const common_1 = require("@nestjs/common");
let GolonganService = class GolonganService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(golongan_validation_1.GolonganValidation.CREATE, req);
        const golonganExists = await this.entityManager.findOne(golongan_entity_1.Golongan, {
            where: {
                nama_golongan: createRequest.nama_golongan,
            },
        });
        if (golonganExists) {
            throw new common_1.HttpException('Golongan already exists', common_1.HttpStatus.CONFLICT);
        }
        const golongan = new golongan_entity_1.Golongan(createRequest);
        await this.entityManager.save(golongan);
        return {
            data: {
                id: golongan.id,
                nama_golongan: golongan.nama_golongan,
            },
        };
    }
    async findAll() {
        const golongans = await this.entityManager.find(golongan_entity_1.Golongan, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: golongans.map((golongan) => ({
                id: golongan.id,
                nama_golongan: golongan.nama_golongan,
            })),
        };
    }
    async findById(golonganId) {
        const golongan = await this.entityManager.findOne(golongan_entity_1.Golongan, {
            where: {
                id: golonganId,
            },
        });
        if (!golongan) {
            throw new common_1.HttpException('Golongan not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: golongan.id,
                nama_golongan: golongan.nama_golongan,
            },
        };
    }
    async update(golonganId, req) {
        const updateRequest = this.validationService.validate(golongan_validation_1.GolonganValidation.UPDATE, req);
        const golongan = await this.entityManager.findOne(golongan_entity_1.Golongan, {
            where: {
                id: golonganId,
            },
        });
        if (!golongan) {
            throw new common_1.HttpException('Golongan not found', common_1.HttpStatus.NOT_FOUND);
        }
        const golonganWithSameName = await this.entityManager.findOne(golongan_entity_1.Golongan, {
            where: {
                nama_golongan: updateRequest.nama_golongan,
            },
        });
        if (golonganWithSameName && golonganWithSameName.id !== golonganId) {
            throw new common_1.HttpException('Golongan already exists', common_1.HttpStatus.CONFLICT);
        }
        await this.entityManager.update(golongan_entity_1.Golongan, golonganId, updateRequest);
        const updatedGolongan = await this.entityManager.findOne(golongan_entity_1.Golongan, {
            where: {
                id: golonganId,
            },
        });
        return {
            data: {
                id: updatedGolongan.id,
                nama_golongan: updatedGolongan.nama_golongan,
            },
        };
    }
    async delete(golonganId) {
        const golongan = await this.entityManager.findOne(golongan_entity_1.Golongan, {
            where: {
                id: golonganId,
            },
        });
        if (!golongan) {
            throw new common_1.HttpException('Golongan not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(golongan_entity_1.Golongan, golonganId);
        return {
            message: 'Golongan deleted successfully!',
        };
    }
};
exports.GolonganService = GolonganService;
exports.GolonganService = GolonganService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], GolonganService);
//# sourceMappingURL=golongan.service.js.map
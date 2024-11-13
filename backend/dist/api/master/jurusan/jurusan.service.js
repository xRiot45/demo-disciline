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
exports.JurusanService = void 0;
const jurusan_entity_1 = require("./entities/jurusan.entity");
const typeorm_1 = require("typeorm");
const validation_service_1 = require("../../../common/validation/validation.service");
const jurusan_validation_1 = require("./jurusan.validation");
const common_1 = require("@nestjs/common");
let JurusanService = class JurusanService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(jurusan_validation_1.JurusanValidation.CREATE, req);
        const jurusanExists = await this.entityManager.findOne(jurusan_entity_1.Jurusan, {
            where: {
                nama_jurusan: createRequest.nama_jurusan,
            },
        });
        if (jurusanExists) {
            throw new common_1.HttpException('Jurusan already exists', common_1.HttpStatus.CONFLICT);
        }
        const jurusan = new jurusan_entity_1.Jurusan(createRequest);
        await this.entityManager.save(jurusan);
        return {
            data: {
                id: jurusan.id,
                nama_jurusan: jurusan.nama_jurusan,
            },
        };
    }
    async findAll() {
        const jurusan = await this.entityManager.find(jurusan_entity_1.Jurusan, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: jurusan.map((item) => ({
                id: item.id,
                nama_jurusan: item.nama_jurusan,
            })),
        };
    }
    async findById(jurusanId) {
        const jurusan = await this.entityManager.findOne(jurusan_entity_1.Jurusan, {
            where: {
                id: jurusanId,
            },
        });
        if (!jurusan) {
            throw new common_1.HttpException('Jurusan not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: jurusan.id,
                nama_jurusan: jurusan.nama_jurusan,
            },
        };
    }
    async update(jurusanId, req) {
        const updateRequest = this.validationService.validate(jurusan_validation_1.JurusanValidation.UPDATE, req);
        const jurusan = await this.entityManager.findOne(jurusan_entity_1.Jurusan, {
            where: {
                id: jurusanId,
            },
        });
        if (!jurusan) {
            throw new common_1.HttpException('Jurusan not found', common_1.HttpStatus.NOT_FOUND);
        }
        const jurusanWithSameName = await this.entityManager.findOne(jurusan_entity_1.Jurusan, {
            where: {
                nama_jurusan: updateRequest.nama_jurusan,
            },
        });
        if (jurusanWithSameName && jurusanWithSameName.id !== jurusan.id) {
            throw new common_1.HttpException('Jurusan already exists', common_1.HttpStatus.CONFLICT);
        }
        await this.entityManager.update(jurusan_entity_1.Jurusan, jurusan.id, updateRequest);
        const updatedJurusan = await this.entityManager.findOne(jurusan_entity_1.Jurusan, {
            where: {
                id: jurusan.id,
            },
        });
        return {
            data: {
                id: updatedJurusan.id,
                nama_jurusan: updatedJurusan.nama_jurusan,
            },
        };
    }
    async delete(jurusanId) {
        const jurusan = await this.entityManager.findOne(jurusan_entity_1.Jurusan, {
            where: {
                id: jurusanId,
            },
        });
        if (!jurusan) {
            throw new common_1.HttpException('Jurusan not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(jurusan_entity_1.Jurusan, jurusan.id);
        return {
            message: 'Jurusan deleted successfully!',
        };
    }
};
exports.JurusanService = JurusanService;
exports.JurusanService = JurusanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], JurusanService);
//# sourceMappingURL=jurusan.service.js.map
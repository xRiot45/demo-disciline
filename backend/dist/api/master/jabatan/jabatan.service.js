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
exports.JabatanService = void 0;
const jabatan_entity_1 = require("./entities/jabatan.entity");
const typeorm_1 = require("typeorm");
const validation_service_1 = require("../../../common/validation/validation.service");
const jabatan_validation_1 = require("./jabatan.validation");
const common_1 = require("@nestjs/common");
let JabatanService = class JabatanService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(jabatan_validation_1.JabatanValidation.CREATE, req);
        const jabatanExists = await this.entityManager.findOne(jabatan_entity_1.Jabatan, {
            where: {
                nama_jabatan: createRequest.nama_jabatan,
            },
        });
        if (jabatanExists) {
            throw new common_1.HttpException('Jabatan already exists', common_1.HttpStatus.CONFLICT);
        }
        const jabatan = new jabatan_entity_1.Jabatan(createRequest);
        await this.entityManager.save(jabatan);
        return {
            data: {
                id: jabatan.id,
                nama_jabatan: jabatan.nama_jabatan,
            },
        };
    }
    async findAll() {
        const jabatan = await this.entityManager.find(jabatan_entity_1.Jabatan, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: jabatan.map((jabatan) => ({
                id: jabatan.id,
                nama_jabatan: jabatan.nama_jabatan,
            })),
        };
    }
    async findById(jabatanId) {
        const jabatan = await this.entityManager.findOne(jabatan_entity_1.Jabatan, {
            where: {
                id: jabatanId,
            },
        });
        if (!jabatan) {
            throw new common_1.HttpException('Jabatan not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: jabatan.id,
                nama_jabatan: jabatan.nama_jabatan,
            },
        };
    }
    async update(jabatanId, req) {
        const updateRequest = this.validationService.validate(jabatan_validation_1.JabatanValidation.UPDATE, req);
        const jabatan = await this.entityManager.findOne(jabatan_entity_1.Jabatan, {
            where: {
                id: jabatanId,
            },
        });
        if (!jabatan) {
            throw new common_1.HttpException('Jabatan not found', common_1.HttpStatus.NOT_FOUND);
        }
        const jabatanWithSameName = await this.entityManager.findOne(jabatan_entity_1.Jabatan, {
            where: {
                nama_jabatan: updateRequest.nama_jabatan,
            },
        });
        if (jabatanWithSameName && jabatanWithSameName.id !== jabatan.id) {
            throw new common_1.HttpException('Jabatan already exists', common_1.HttpStatus.CONFLICT);
        }
        await this.entityManager.update(jabatan_entity_1.Jabatan, jabatanId, updateRequest);
        const updatedJabatan = await this.entityManager.findOne(jabatan_entity_1.Jabatan, {
            where: {
                id: jabatanId,
            },
        });
        return {
            data: {
                id: updatedJabatan.id,
                nama_jabatan: updatedJabatan.nama_jabatan,
            },
        };
    }
    async delete(jabatanId) {
        const jabatan = await this.entityManager.findOne(jabatan_entity_1.Jabatan, {
            where: {
                id: jabatanId,
            },
        });
        if (!jabatan) {
            throw new common_1.HttpException('Jabatan not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(jabatan_entity_1.Jabatan, jabatanId);
        return {
            message: 'Jabatan deleted successfully',
        };
    }
};
exports.JabatanService = JabatanService;
exports.JabatanService = JabatanService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], JabatanService);
//# sourceMappingURL=jabatan.service.js.map
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
exports.TipePelanggaranService = void 0;
const typeorm_1 = require("typeorm");
const tipe_pelanggaran_entity_1 = require("./entities/tipe-pelanggaran.entity");
const validation_service_1 = require("../../../common/validation/validation.service");
const tipe_pelanggaran_validation_1 = require("./tipe-pelanggaran.validation");
const common_1 = require("@nestjs/common");
let TipePelanggaranService = class TipePelanggaranService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(tipe_pelanggaran_validation_1.TipePelanggaranValidation.CREATE, req);
        const tipePelanggaranExists = await this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
            where: {
                nama_tipe_pelanggaran: createRequest.nama_tipe_pelanggaran,
            },
        });
        if (tipePelanggaranExists) {
            throw new common_1.HttpException('Tipe Pelanggaran already exists', common_1.HttpStatus.CONFLICT);
        }
        const tipePelanggaran = new tipe_pelanggaran_entity_1.TipePelanggaran(createRequest);
        await this.entityManager.save(tipePelanggaran);
        return {
            data: {
                id: tipePelanggaran.id,
                nama_tipe_pelanggaran: tipePelanggaran.nama_tipe_pelanggaran,
            },
        };
    }
    async findAll() {
        const tipePelanggaran = await this.entityManager.find(tipe_pelanggaran_entity_1.TipePelanggaran, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: tipePelanggaran.map((item) => ({
                id: item.id,
                nama_tipe_pelanggaran: item.nama_tipe_pelanggaran,
            })),
        };
    }
    async findById(tipePelanggaranId) {
        const tipePelanggaran = await this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
            where: {
                id: tipePelanggaranId,
            },
        });
        if (!tipePelanggaran) {
            throw new common_1.HttpException('Tipe Pelanggaran not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: tipePelanggaran.id,
                nama_tipe_pelanggaran: tipePelanggaran.nama_tipe_pelanggaran,
            },
        };
    }
    async update(tipePelanggaranId, req) {
        const updateRequest = this.validationService.validate(tipe_pelanggaran_validation_1.TipePelanggaranValidation.UPDATE, req);
        const tipePelanggaran = await this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
            where: {
                id: tipePelanggaranId,
            },
        });
        if (!tipePelanggaran) {
            throw new common_1.HttpException('Tipe Pelanggaran not found', common_1.HttpStatus.NOT_FOUND);
        }
        const tipePelanggaranWithSameName = await this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
            where: {
                nama_tipe_pelanggaran: updateRequest.nama_tipe_pelanggaran,
            },
        });
        if (tipePelanggaranWithSameName &&
            tipePelanggaranWithSameName.id !== tipePelanggaran.id) {
            throw new common_1.HttpException('Tipe Pelanggaran already exists', common_1.HttpStatus.CONFLICT);
        }
        await this.entityManager.update(tipe_pelanggaran_entity_1.TipePelanggaran, tipePelanggaran.id, updateRequest);
        const updatedTipePelanggaran = await this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
            where: {
                id: tipePelanggaran.id,
            },
        });
        return {
            data: {
                id: updatedTipePelanggaran.id,
                nama_tipe_pelanggaran: updatedTipePelanggaran.nama_tipe_pelanggaran,
            },
        };
    }
    async delete(tipePelanggaranId) {
        const tipePelanggaran = await this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
            where: {
                id: tipePelanggaranId,
            },
        });
        if (!tipePelanggaran) {
            throw new common_1.HttpException('Tipe Pelanggaran not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(tipe_pelanggaran_entity_1.TipePelanggaran, tipePelanggaran.id);
        return {
            message: 'Tipe Pelanggaran deleted successfully!',
        };
    }
};
exports.TipePelanggaranService = TipePelanggaranService;
exports.TipePelanggaranService = TipePelanggaranService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], TipePelanggaranService);
//# sourceMappingURL=tipe-pelanggaran.service.js.map
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
exports.GuruService = void 0;
const guru_entity_1 = require("./entities/guru.entity");
const agama_entity_1 = require("../master/agama/entities/agama.entity");
const status_entity_1 = require("../master/status/entities/status.entity");
const jabatan_entity_1 = require("../master/jabatan/entities/jabatan.entity");
const golongan_entity_1 = require("../master/golongan/entities/golongan.entity");
const typeorm_1 = require("typeorm");
const guru_validation_1 = require("./guru.validation");
const validation_service_1 = require("../../common/validation/validation.service");
const common_1 = require("@nestjs/common");
let GuruService = class GuruService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(guru_validation_1.GuruValidation.CREATE, req);
        const guruExists = await this.entityManager.findOne(guru_entity_1.Guru, {
            where: {
                nama_lengkap: createRequest.nama_lengkap,
                nip: createRequest.nip,
            },
        });
        if (guruExists) {
            throw new common_1.HttpException('Guru already exists', common_1.HttpStatus.CONFLICT);
        }
        const [status, jabatan, golongan, agama] = await Promise.all([
            this.entityManager.findOne(status_entity_1.Status, {
                where: {
                    id: createRequest.statusId,
                },
            }),
            this.entityManager.findOne(jabatan_entity_1.Jabatan, {
                where: {
                    id: createRequest.jabatanId,
                },
            }),
            this.entityManager.findOne(golongan_entity_1.Golongan, {
                where: {
                    id: createRequest.golonganId,
                },
            }),
            this.entityManager.findOne(agama_entity_1.Agama, {
                where: {
                    id: createRequest.agamaId,
                },
            }),
        ]);
        const data = {
            ...createRequest,
            statusId: status,
            jabatanId: jabatan,
            golonganId: golongan,
            agamaId: agama,
        };
        const guru = new guru_entity_1.Guru(data);
        const savedGuru = await this.entityManager.save(guru);
        return {
            data: {
                id: savedGuru.id,
                nama_lengkap: savedGuru.nama_lengkap,
                nip: savedGuru.nip,
                status: {
                    id: status ? status.id : null,
                    nama_status: status ? status.nama_status : null,
                },
                jabatan: {
                    id: jabatan ? jabatan.id : null,
                    nama_jabatan: jabatan ? jabatan.nama_jabatan : null,
                },
                golongan: {
                    id: golongan ? golongan.id : null,
                    nama_golongan: golongan ? golongan.nama_golongan : null,
                },
                agama: {
                    id: agama ? agama.id : null,
                    nama_agama: agama ? agama.nama_agama : null,
                },
                jenis_kelamin: savedGuru.jenis_kelamin,
                no_telp: savedGuru.no_telp,
                alamat: savedGuru.alamat,
            },
        };
    }
    async findAll() {
        const guru = await this.entityManager.find(guru_entity_1.Guru, {
            order: {
                createdAt: 'DESC',
            },
        });
        const data = guru.map((item) => {
            return {
                id: item.id,
                nama_lengkap: item.nama_lengkap,
                nip: item.nip,
                status: {
                    id: item.statusId ? item.statusId.id : null,
                    nama_status: item.statusId ? item.statusId.nama_status : null,
                },
                jabatan: {
                    id: item.jabatanId ? item.jabatanId.id : null,
                    nama_jabatan: item.jabatanId ? item.jabatanId.nama_jabatan : null,
                },
                golongan: {
                    id: item.golonganId ? item.golonganId.id : null,
                    nama_golongan: item.golonganId ? item.golonganId.nama_golongan : null,
                },
                agama: {
                    id: item.agamaId ? item.agamaId.id : null,
                    nama_agama: item.agamaId ? item.agamaId.nama_agama : null,
                },
                jenis_kelamin: item.jenis_kelamin,
                no_telp: item.no_telp,
                alamat: item.alamat,
            };
        });
        return { data: data };
    }
    async findById(guruId) {
        const guru = await this.entityManager.findOne(guru_entity_1.Guru, {
            where: {
                id: guruId,
            },
        });
        if (!guru) {
            throw new common_1.HttpException('Guru not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: guru.id,
                nama_lengkap: guru.nama_lengkap,
                nip: guru.nip,
                status: {
                    id: guru.statusId ? guru.statusId.id : null,
                    nama_status: guru.statusId ? guru.statusId.nama_status : null,
                },
                jabatan: {
                    id: guru.jabatanId ? guru.jabatanId.id : null,
                    nama_jabatan: guru.jabatanId ? guru.jabatanId.nama_jabatan : null,
                },
                golongan: {
                    id: guru.golonganId ? guru.golonganId.id : null,
                    nama_golongan: guru.golonganId ? guru.golonganId.nama_golongan : null,
                },
                agama: {
                    id: guru.agamaId ? guru.agamaId.id : null,
                    nama_agama: guru.agamaId ? guru.agamaId.nama_agama : null,
                },
                jenis_kelamin: guru.jenis_kelamin,
                no_telp: guru.no_telp,
                alamat: guru.alamat,
            },
        };
    }
    async update(guruId, req) {
        const updateRequest = this.validationService.validate(guru_validation_1.GuruValidation.UPDATE, req);
        const guru = await this.entityManager.findOne(guru_entity_1.Guru, {
            where: {
                id: guruId,
            },
        });
        if (!guru) {
            throw new common_1.HttpException('Guru not found', common_1.HttpStatus.NOT_FOUND);
        }
        const guruWithSameNipAndName = await this.entityManager.findOne(guru_entity_1.Guru, {
            where: {
                nama_lengkap: updateRequest.nama_lengkap,
                nip: updateRequest.nip,
            },
        });
        if (guruWithSameNipAndName && guruWithSameNipAndName.id !== guruId) {
            throw new common_1.HttpException('Guru already exists', common_1.HttpStatus.CONFLICT);
        }
        const [status, jabatan, golongan, agama] = await Promise.all([
            this.entityManager.findOne(status_entity_1.Status, {
                where: {
                    id: updateRequest.statusId,
                },
            }),
            this.entityManager.findOne(jabatan_entity_1.Jabatan, {
                where: {
                    id: updateRequest.jabatanId,
                },
            }),
            this.entityManager.findOne(golongan_entity_1.Golongan, {
                where: {
                    id: updateRequest.golonganId,
                },
            }),
            this.entityManager.findOne(agama_entity_1.Agama, {
                where: {
                    id: updateRequest.agamaId,
                },
            }),
        ]);
        const data = {
            ...updateRequest,
            statusId: status,
            jabatanId: jabatan,
            golonganId: golongan,
            agamaId: agama,
        };
        await this.entityManager.update(guru_entity_1.Guru, guruId, data);
        const updatedGuru = await this.entityManager.findOne(guru_entity_1.Guru, {
            where: {
                id: guruId,
            },
        });
        return {
            data: {
                id: updatedGuru.id,
                nama_lengkap: updatedGuru.nama_lengkap,
                nip: updatedGuru.nip,
                status: {
                    id: updatedGuru.statusId ? updatedGuru.statusId.id : null,
                    nama_status: updatedGuru.statusId
                        ? updatedGuru.statusId.nama_status
                        : null,
                },
                jabatan: {
                    id: updatedGuru.jabatanId ? updatedGuru.jabatanId.id : null,
                    nama_jabatan: updatedGuru.jabatanId
                        ? updatedGuru.jabatanId.nama_jabatan
                        : null,
                },
                golongan: {
                    id: updatedGuru.golonganId ? updatedGuru.golonganId.id : null,
                    nama_golongan: updatedGuru.golonganId
                        ? updatedGuru.golonganId.nama_golongan
                        : null,
                },
                agama: {
                    id: updatedGuru.agamaId ? updatedGuru.agamaId.id : null,
                    nama_agama: updatedGuru.agamaId
                        ? updatedGuru.agamaId.nama_agama
                        : null,
                },
                jenis_kelamin: updatedGuru.jenis_kelamin,
                no_telp: updatedGuru.no_telp,
                alamat: updatedGuru.alamat,
            },
        };
    }
    async delete(guruId) {
        const guru = await this.entityManager.findOne(guru_entity_1.Guru, {
            where: {
                id: guruId,
            },
        });
        if (!guru) {
            throw new common_1.HttpException('Guru not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(guru_entity_1.Guru, guruId);
        return {
            message: 'Guru deleted successfully!',
        };
    }
};
exports.GuruService = GuruService;
exports.GuruService = GuruService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], GuruService);
//# sourceMappingURL=guru.service.js.map
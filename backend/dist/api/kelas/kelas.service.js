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
exports.KelasService = void 0;
const guru_entity_1 = require("../guru/entities/guru.entity");
const kelas_entity_1 = require("./entities/kelas.entity");
const jurusan_entity_1 = require("../master/jurusan/entities/jurusan.entity");
const typeorm_1 = require("typeorm");
const kelas_validation_1 = require("./kelas.validation");
const validation_service_1 = require("../../common/validation/validation.service");
const common_1 = require("@nestjs/common");
let KelasService = class KelasService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(kelas_validation_1.KelasValidation.CREATE, req);
        const kelasExists = await this.entityManager.findOne(kelas_entity_1.Kelas, {
            where: {
                nama_kelas: createRequest.nama_kelas,
            },
        });
        if (kelasExists) {
            throw new common_1.HttpException('Kelas already exists', common_1.HttpStatus.CONFLICT);
        }
        const [jurusan, guru] = await Promise.all([
            this.entityManager.findOne(jurusan_entity_1.Jurusan, {
                where: {
                    id: createRequest.jurusanId,
                },
            }),
            this.entityManager.findOne(guru_entity_1.Guru, {
                where: {
                    id: createRequest.guruId,
                },
            }),
        ]);
        if (!jurusan) {
            throw new common_1.HttpException('Jurusan not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!guru) {
            throw new common_1.HttpException('Guru not found', common_1.HttpStatus.NOT_FOUND);
        }
        const data = {
            ...createRequest,
            jurusanId: jurusan,
            guruId: guru,
        };
        const kelas = new kelas_entity_1.Kelas(data);
        const savedKelas = await this.entityManager.save(kelas);
        return {
            data: {
                id: savedKelas.id,
                nama_kelas: savedKelas.nama_kelas,
                jurusan: {
                    id: jurusan ? jurusan.id : null,
                    nama_jurusan: jurusan ? jurusan.nama_jurusan : null,
                },
                guru: {
                    id: guru ? guru.id : null,
                    nama_guru: guru ? guru.nama_lengkap : null,
                    no_telp: guru ? guru.no_telp : null,
                },
            },
        };
    }
    async findAll() {
        const kelas = await this.entityManager.find(kelas_entity_1.Kelas, {
            order: {
                createdAt: 'DESC',
            },
        });
        const data = kelas.map((item) => {
            return {
                id: item.id,
                nama_kelas: item.nama_kelas,
                jurusan: {
                    id: item.jurusanId ? item.jurusanId.id : null,
                    nama_jurusan: item.jurusanId ? item.jurusanId.nama_jurusan : null,
                },
                guru: {
                    id: item.guruId ? item.guruId.id : null,
                    nama_guru: item.guruId ? item.guruId.nama_lengkap : null,
                    no_telp: item.guruId ? item.guruId.no_telp : null,
                },
            };
        });
        return { data };
    }
    async findById(kelasId) {
        const kelas = await this.entityManager.findOne(kelas_entity_1.Kelas, {
            where: {
                id: kelasId,
            },
        });
        if (!kelas) {
            throw new common_1.HttpException('Kelas not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: kelas.id,
                nama_kelas: kelas.nama_kelas,
                jurusan: {
                    id: kelas.jurusanId ? kelas.jurusanId.id : null,
                    nama_jurusan: kelas.jurusanId ? kelas.jurusanId.nama_jurusan : null,
                },
                guru: {
                    id: kelas.guruId ? kelas.guruId.id : null,
                    nama_guru: kelas.guruId ? kelas.guruId.nama_lengkap : null,
                    no_telp: kelas.guruId ? kelas.guruId.no_telp : null,
                },
            },
        };
    }
    async update(kelasId, req) {
        const updateRequest = this.validationService.validate(kelas_validation_1.KelasValidation.UPDATE, req);
        const kelas = await this.entityManager.findOne(kelas_entity_1.Kelas, {
            where: {
                id: kelasId,
            },
        });
        if (!kelas) {
            throw new common_1.HttpException('Kelas not found', common_1.HttpStatus.NOT_FOUND);
        }
        const kelasWithSameName = await this.entityManager.findOne(kelas_entity_1.Kelas, {
            where: {
                nama_kelas: updateRequest.nama_kelas,
            },
        });
        if (kelasWithSameName && kelasWithSameName.id !== kelas.id) {
            throw new common_1.HttpException('Kelas already exists', common_1.HttpStatus.CONFLICT);
        }
        const [jurusan, guru] = await Promise.all([
            this.entityManager.findOne(jurusan_entity_1.Jurusan, {
                where: {
                    id: updateRequest.jurusanId,
                },
            }),
            this.entityManager.findOne(guru_entity_1.Guru, {
                where: {
                    id: updateRequest.guruId,
                },
            }),
        ]);
        if (!jurusan) {
            throw new common_1.HttpException('Jurusan not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!guru) {
            throw new common_1.HttpException('Guru not found', common_1.HttpStatus.NOT_FOUND);
        }
        const data = {
            ...updateRequest,
            jurusanId: jurusan,
            guruId: guru,
        };
        await this.entityManager.update(kelas_entity_1.Kelas, kelasId, data);
        const updatedKelas = await this.entityManager.findOne(kelas_entity_1.Kelas, {
            where: {
                id: kelasId,
            },
        });
        return {
            data: {
                id: updatedKelas.id,
                nama_kelas: updatedKelas.nama_kelas,
                jurusan: {
                    id: jurusan ? jurusan.id : null,
                    nama_jurusan: jurusan ? jurusan.nama_jurusan : null,
                },
                guru: {
                    id: guru ? guru.id : null,
                    nama_guru: guru ? guru.nama_lengkap : null,
                    no_telp: guru ? guru.no_telp : null,
                },
            },
        };
    }
    async delete(kelasId) {
        const kelas = await this.entityManager.findOne(kelas_entity_1.Kelas, {
            where: {
                id: kelasId,
            },
        });
        if (!kelas) {
            throw new common_1.HttpException('Kelas not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(kelas_entity_1.Kelas, kelasId);
        return {
            message: 'Kelas deleted successfully!',
        };
    }
};
exports.KelasService = KelasService;
exports.KelasService = KelasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], KelasService);
//# sourceMappingURL=kelas.service.js.map
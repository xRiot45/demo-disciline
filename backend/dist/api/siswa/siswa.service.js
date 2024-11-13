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
exports.SiswaService = void 0;
const kelas_entity_1 = require("../kelas/entities/kelas.entity");
const siswa_entity_1 = require("./entities/siswa.entity");
const agama_entity_1 = require("../master/agama/entities/agama.entity");
const typeorm_1 = require("typeorm");
const siswa_validation_1 = require("./siswa.validation");
const validation_service_1 = require("../../common/validation/validation.service");
const common_1 = require("@nestjs/common");
let SiswaService = class SiswaService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(siswa_validation_1.SiswaValidation.CREATE, req);
        const siswaExists = await this.entityManager.findOne(siswa_entity_1.Siswa, {
            where: {
                nama_lengkap: createRequest.nama_lengkap,
            },
        });
        if (siswaExists) {
            throw new common_1.HttpException('Siswa already exists', common_1.HttpStatus.CONFLICT);
        }
        const [agama, kelas] = await Promise.all([
            this.entityManager.findOne(agama_entity_1.Agama, {
                where: {
                    id: createRequest.agamaId,
                },
            }),
            this.entityManager.findOne(kelas_entity_1.Kelas, {
                where: {
                    id: createRequest.kelasId,
                },
            }),
        ]);
        if (!agama) {
            throw new common_1.HttpException('Agama not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!kelas) {
            throw new common_1.HttpException('Kelas not found', common_1.HttpStatus.NOT_FOUND);
        }
        const data = {
            ...createRequest,
            agamaId: agama,
            kelasId: kelas,
        };
        const siswa = new siswa_entity_1.Siswa(data);
        await this.entityManager.save(siswa);
        return {
            data: {
                id: siswa.id,
                nama_lengkap: siswa.nama_lengkap,
                nis: siswa.nis,
                nisn: siswa.nisn,
                tanggal_lahir: siswa.tanggal_lahir,
                tempat_lahir: siswa.tempat_lahir,
                jenis_kelamin: siswa.jenis_kelamin,
                kelas: {
                    id: kelas ? kelas.id : null,
                    nama_kelas: kelas ? kelas.nama_kelas : null,
                    jurusan: {
                        id: kelas ? kelas.jurusanId.id : null,
                        nama_jurusan: kelas ? kelas.jurusanId.nama_jurusan : null,
                    },
                    guru: {
                        id: kelas ? kelas.guruId.id : null,
                        nama_lengkap: kelas ? kelas.guruId.nama_lengkap : null,
                    },
                },
                agama: {
                    id: agama ? agama.id : null,
                    nama_agama: agama ? agama.nama_agama : null,
                },
                nama_wali: siswa.nama_wali,
                no_telp_wali: siswa.no_telp_wali,
                alamat: siswa.alamat,
            },
        };
    }
    async findAll() {
        const siswa = await this.entityManager.find(siswa_entity_1.Siswa, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: siswa.map((item) => ({
                id: item.id,
                nama_lengkap: item.nama_lengkap,
                nis: item.nis,
                nisn: item.nisn,
                tanggal_lahir: item.tanggal_lahir,
                tempat_lahir: item.tempat_lahir,
                jenis_kelamin: item.jenis_kelamin,
                kelas: {
                    id: item.kelasId ? item.kelasId.id : null,
                    nama_kelas: item.kelasId ? item.kelasId.nama_kelas : null,
                    jurusan: {
                        id: item.kelasId ? item.kelasId.jurusanId.id : null,
                        nama_jurusan: item.kelasId
                            ? item.kelasId.jurusanId.nama_jurusan
                            : null,
                    },
                    guru: {
                        id: item.kelasId ? item.kelasId.guruId.id : null,
                        nama_lengkap: item.kelasId
                            ? item.kelasId.guruId.nama_lengkap
                            : null,
                    },
                },
                agama: {
                    id: item.agamaId ? item.agamaId.id : null,
                    nama_agama: item.agamaId ? item.agamaId.nama_agama : null,
                },
                nama_wali: item.nama_wali,
                no_telp_wali: item.no_telp_wali,
                alamat: item.alamat,
            })),
        };
    }
    async findById(siswaId) {
        const siswa = await this.entityManager.findOne(siswa_entity_1.Siswa, {
            where: {
                id: siswaId,
            },
        });
        if (!siswa) {
            throw new common_1.HttpException('Siswa not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: siswa.id,
                nama_lengkap: siswa.nama_lengkap,
                nis: siswa.nis,
                nisn: siswa.nisn,
                tanggal_lahir: siswa.tanggal_lahir,
                tempat_lahir: siswa.tempat_lahir,
                jenis_kelamin: siswa.jenis_kelamin,
                kelas: {
                    id: siswa.kelasId ? siswa.kelasId.id : null,
                    nama_kelas: siswa.kelasId ? siswa.kelasId.nama_kelas : null,
                    jurusan: {
                        id: siswa.kelasId ? siswa.kelasId.jurusanId.id : null,
                        nama_jurusan: siswa.kelasId
                            ? siswa.kelasId.jurusanId.nama_jurusan
                            : null,
                    },
                    guru: {
                        id: siswa.kelasId ? siswa.kelasId.guruId.id : null,
                        nama_lengkap: siswa.kelasId
                            ? siswa.kelasId.guruId.nama_lengkap
                            : null,
                    },
                },
                agama: {
                    id: siswa.agamaId ? siswa.agamaId.id : null,
                    nama_agama: siswa.agamaId ? siswa.agamaId.nama_agama : null,
                },
                nama_wali: siswa.nama_wali,
                no_telp_wali: siswa.no_telp_wali,
                alamat: siswa.alamat,
            },
        };
    }
    async update(siswaId, req) {
        const updateRequest = this.validationService.validate(siswa_validation_1.SiswaValidation.UPDATE, req);
        const siswa = await this.entityManager.findOne(siswa_entity_1.Siswa, {
            where: {
                id: siswaId,
            },
        });
        if (!siswa) {
            throw new common_1.HttpException('Siswa not found', common_1.HttpStatus.NOT_FOUND);
        }
        const siswaWithSameName = await this.entityManager.findOne(siswa_entity_1.Siswa, {
            where: {
                nama_lengkap: updateRequest.nama_lengkap,
            },
        });
        if (siswaWithSameName && siswaWithSameName.id !== siswaId) {
            throw new common_1.HttpException('Siswa already exists', common_1.HttpStatus.CONFLICT);
        }
        const [agama, kelas] = await Promise.all([
            this.entityManager.findOne(agama_entity_1.Agama, {
                where: {
                    id: updateRequest.agamaId,
                },
            }),
            this.entityManager.findOne(kelas_entity_1.Kelas, {
                where: {
                    id: updateRequest.kelasId,
                },
            }),
        ]);
        if (!agama) {
            throw new common_1.HttpException('Agama not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!kelas) {
            throw new common_1.HttpException('Kelas not found', common_1.HttpStatus.NOT_FOUND);
        }
        const data = {
            ...updateRequest,
            agamaId: agama,
            kelasId: kelas,
        };
        await this.entityManager.update(siswa_entity_1.Siswa, siswaId, data);
        const updatedSiswa = await this.entityManager.findOne(siswa_entity_1.Siswa, {
            where: {
                id: siswaId,
            },
        });
        return {
            data: {
                id: updatedSiswa.id,
                nama_lengkap: updatedSiswa.nama_lengkap,
                nis: updatedSiswa.nis,
                nisn: updatedSiswa.nisn,
                tanggal_lahir: updatedSiswa.tanggal_lahir,
                tempat_lahir: updatedSiswa.tempat_lahir,
                jenis_kelamin: updatedSiswa.jenis_kelamin,
                kelas: {
                    id: kelas ? kelas.id : null,
                    nama_kelas: kelas ? kelas.nama_kelas : null,
                    jurusan: {
                        id: kelas ? kelas.jurusanId.id : null,
                        nama_jurusan: kelas ? kelas.jurusanId.nama_jurusan : null,
                    },
                    guru: {
                        id: kelas ? kelas.guruId.id : null,
                        nama_lengkap: kelas ? kelas.guruId.nama_lengkap : null,
                    },
                },
                agama: {
                    id: agama ? agama.id : null,
                    nama_agama: agama ? agama.nama_agama : null,
                },
                nama_wali: updatedSiswa.nama_wali,
                no_telp_wali: updatedSiswa.no_telp_wali,
                alamat: updatedSiswa.alamat,
            },
        };
    }
    async delete(siswaId) {
        const siswa = await this.entityManager.findOne(siswa_entity_1.Siswa, {
            where: {
                id: siswaId,
            },
        });
        if (!siswa) {
            throw new common_1.HttpException('Siswa not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.entityManager.delete(siswa_entity_1.Siswa, siswaId);
        return {
            message: 'Siswa deleted successfully!',
        };
    }
};
exports.SiswaService = SiswaService;
exports.SiswaService = SiswaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], SiswaService);
//# sourceMappingURL=siswa.service.js.map
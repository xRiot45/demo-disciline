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
exports.PelanggaranService = void 0;
const siswa_entity_1 = require("../siswa/entities/siswa.entity");
const pelanggaran_entity_1 = require("./entities/pelanggaran.entity");
const typeorm_1 = require("typeorm");
const tipe_pelanggaran_entity_1 = require("../master/tipe-pelanggaran/entities/tipe-pelanggaran.entity");
const validation_service_1 = require("../../common/validation/validation.service");
const pelanggaran_validation_1 = require("./pelanggaran.validation");
const common_1 = require("@nestjs/common");
let PelanggaranService = class PelanggaranService {
    constructor(entityManager, validationService) {
        this.entityManager = entityManager;
        this.validationService = validationService;
    }
    async create(req) {
        const createRequest = this.validationService.validate(pelanggaran_validation_1.PelanggaranValidation.CREATE, req);
        const [tipePelanggaran, siswa] = await Promise.all([
            this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
                where: {
                    id: createRequest.tipePelanggaranId,
                },
            }),
            this.entityManager.findOne(siswa_entity_1.Siswa, {
                where: {
                    id: createRequest.siswaId,
                },
            }),
        ]);
        if (!tipePelanggaran) {
            throw new common_1.HttpException('Tipe Pelanggaran not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!siswa) {
            throw new common_1.HttpException('Siswa not found', common_1.HttpStatus.NOT_FOUND);
        }
        const data = {
            ...createRequest,
            tipePelanggaranId: tipePelanggaran,
            siswaId: siswa,
        };
        const pelanggaran = new pelanggaran_entity_1.Pelanggaran(data);
        await this.entityManager.save(pelanggaran);
        return {
            data: {
                id: pelanggaran.id,
                tipe_pelanggaran: {
                    id: tipePelanggaran ? tipePelanggaran.id : null,
                    nama_tipe_pelanggaran: tipePelanggaran
                        ? tipePelanggaran.nama_tipe_pelanggaran
                        : null,
                },
                siswa: {
                    id: siswa ? siswa.id : null,
                    nama_lengkap: siswa ? siswa.nama_lengkap : null,
                    kelas: {
                        id: siswa?.kelasId ? siswa.kelasId.id : null,
                        nama_kelas: siswa?.kelasId ? siswa.kelasId.nama_kelas : null,
                        jurusan: {
                            nama_jurusan: siswa?.kelasId?.jurusanId
                                ? siswa.kelasId.jurusanId.nama_jurusan
                                : null,
                        },
                        guru: {
                            nama_lengkap: siswa?.kelasId?.guruId
                                ? siswa.kelasId.guruId.nama_lengkap
                                : null,
                        },
                    },
                    nama_wali: siswa ? siswa.nama_wali : null,
                    no_telp_wali: siswa ? siswa.no_telp_wali : null,
                    alamat: siswa ? siswa.alamat : null,
                },
                keterangan: pelanggaran.keterangan,
            },
        };
    }
    async findAll() {
        const pelanggaran = await this.entityManager.find(pelanggaran_entity_1.Pelanggaran, {
            order: {
                createdAt: 'DESC',
            },
        });
        return {
            data: pelanggaran.map((item) => ({
                id: item.id,
                tipe_pelanggaran: {
                    id: item.tipePelanggaranId ? item.tipePelanggaranId.id : null,
                    nama_tipe_pelanggaran: item.tipePelanggaranId
                        ? item.tipePelanggaranId.nama_tipe_pelanggaran
                        : null,
                },
                siswa: {
                    id: item.siswaId ? item.siswaId.id : null,
                    nama_lengkap: item.siswaId ? item.siswaId.nama_lengkap : null,
                    kelas: {
                        id: item.siswaId?.kelasId ? item.siswaId.kelasId.id : null,
                        nama_kelas: item.siswaId?.kelasId
                            ? item.siswaId.kelasId.nama_kelas
                            : null,
                        jurusan: {
                            nama_jurusan: item.siswaId?.kelasId?.jurusanId
                                ? item.siswaId.kelasId.jurusanId.nama_jurusan
                                : null,
                        },
                        guru: {
                            nama_lengkap: item.siswaId?.kelasId?.guruId
                                ? item.siswaId.kelasId.guruId.nama_lengkap
                                : null,
                        },
                    },
                    nama_wali: item.siswaId ? item.siswaId.nama_wali : null,
                    no_telp_wali: item.siswaId ? item.siswaId.no_telp_wali : null,
                    alamat: item.siswaId ? item.siswaId.alamat : null,
                },
                keterangan: item.keterangan,
            })),
        };
    }
    async findById(pelanggaranId) {
        const pelanggaran = await this.entityManager.findOne(pelanggaran_entity_1.Pelanggaran, {
            where: {
                id: pelanggaranId,
            },
        });
        if (!pelanggaran) {
            throw new common_1.HttpException('Pelanggaran not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            data: {
                id: pelanggaran.id,
                tipe_pelanggaran: {
                    id: pelanggaran.tipePelanggaranId
                        ? pelanggaran.tipePelanggaranId.id
                        : null,
                    nama_tipe_pelanggaran: pelanggaran.tipePelanggaranId
                        ? pelanggaran.tipePelanggaranId.nama_tipe_pelanggaran
                        : null,
                },
                siswa: {
                    id: pelanggaran.siswaId ? pelanggaran.siswaId.id : null,
                    nama_lengkap: pelanggaran.siswaId
                        ? pelanggaran.siswaId.nama_lengkap
                        : null,
                    kelas: {
                        id: pelanggaran.siswaId?.kelasId
                            ? pelanggaran.siswaId.kelasId.id
                            : null,
                        nama_kelas: pelanggaran.siswaId?.kelasId
                            ? pelanggaran.siswaId.kelasId.nama_kelas
                            : null,
                        jurusan: {
                            nama_jurusan: pelanggaran.siswaId?.kelasId?.jurusanId
                                ? pelanggaran.siswaId.kelasId.jurusanId.nama_jurusan
                                : null,
                        },
                        guru: {
                            nama_lengkap: pelanggaran.siswaId?.kelasId?.guruId
                                ? pelanggaran.siswaId.kelasId.guruId.nama_lengkap
                                : null,
                        },
                    },
                    nama_wali: pelanggaran.siswaId ? pelanggaran.siswaId.nama_wali : null,
                    no_telp_wali: pelanggaran.siswaId
                        ? pelanggaran.siswaId.no_telp_wali
                        : null,
                    alamat: pelanggaran.siswaId ? pelanggaran.siswaId.alamat : null,
                },
                keterangan: pelanggaran.keterangan,
            },
        };
    }
    async update(pelanggaranId, req) {
        const updateRequest = this.validationService.validate(pelanggaran_validation_1.PelanggaranValidation.UPDATE, req);
        const pelanggaran = await this.entityManager.findOne(pelanggaran_entity_1.Pelanggaran, {
            where: {
                id: pelanggaranId,
            },
        });
        if (!pelanggaran) {
            throw new common_1.HttpException('Pelanggaran not found', common_1.HttpStatus.NOT_FOUND);
        }
        const [tipePelanggaran, siswa] = await Promise.all([
            this.entityManager.findOne(tipe_pelanggaran_entity_1.TipePelanggaran, {
                where: {
                    id: updateRequest.tipePelanggaranId,
                },
            }),
            this.entityManager.findOne(siswa_entity_1.Siswa, {
                where: {
                    id: updateRequest.siswaId,
                },
            }),
        ]);
        if (!tipePelanggaran) {
            throw new common_1.HttpException('Tipe Pelanggaran not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!siswa) {
            throw new common_1.HttpException('Siswa not found', common_1.HttpStatus.NOT_FOUND);
        }
        const data = {
            ...updateRequest,
            tipePelanggaranId: tipePelanggaran,
            siswaId: siswa,
        };
        await this.entityManager.update(pelanggaran_entity_1.Pelanggaran, pelanggaranId, data);
        const updatedPelanggaran = await this.entityManager.findOne(pelanggaran_entity_1.Pelanggaran, {
            where: {
                id: pelanggaranId,
            },
        });
        return {
            data: {
                id: updatedPelanggaran.id,
                tipe_pelanggaran: {
                    id: tipePelanggaran ? tipePelanggaran.id : null,
                    nama_tipe_pelanggaran: tipePelanggaran
                        ? tipePelanggaran.nama_tipe_pelanggaran
                        : null,
                },
                siswa: {
                    id: siswa ? siswa.id : null,
                    nama_lengkap: siswa ? siswa.nama_lengkap : null,
                    kelas: {
                        id: siswa?.kelasId ? siswa.kelasId.id : null,
                        nama_kelas: siswa?.kelasId ? siswa.kelasId.nama_kelas : null,
                        jurusan: {
                            nama_jurusan: siswa?.kelasId?.jurusanId
                                ? siswa.kelasId.jurusanId.nama_jurusan
                                : null,
                        },
                        guru: {
                            nama_lengkap: siswa?.kelasId?.guruId
                                ? siswa.kelasId.guruId.nama_lengkap
                                : null,
                        },
                    },
                    nama_wali: siswa ? siswa.nama_wali : null,
                    no_telp_wali: siswa ? siswa.no_telp_wali : null,
                    alamat: siswa ? siswa.alamat : null,
                },
                keterangan: updatedPelanggaran.keterangan,
            },
        };
    }
};
exports.PelanggaranService = PelanggaranService;
exports.PelanggaranService = PelanggaranService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        validation_service_1.ValidationService])
], PelanggaranService);
//# sourceMappingURL=pelanggaran.service.js.map
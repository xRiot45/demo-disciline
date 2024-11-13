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
exports.Kelas = void 0;
const guru_entity_1 = require("../../../api/guru/entities/guru.entity");
const siswa_entity_1 = require("../../../api/siswa/entities/siswa.entity");
const jurusan_entity_1 = require("../../../api/master/jurusan/entities/jurusan.entity");
const typeorm_1 = require("typeorm");
let Kelas = class Kelas {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.Kelas = Kelas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Kelas.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25,
        nullable: false,
    }),
    __metadata("design:type", String)
], Kelas.prototype, "nama_kelas", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Kelas.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Kelas.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jurusan_entity_1.Jurusan, (jurusan) => jurusan.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'jurusanId' }),
    __metadata("design:type", jurusan_entity_1.Jurusan)
], Kelas.prototype, "jurusanId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => guru_entity_1.Guru, (guru) => guru.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'guruId' }),
    __metadata("design:type", guru_entity_1.Guru)
], Kelas.prototype, "guruId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => siswa_entity_1.Siswa, (siswa) => siswa.kelasId),
    __metadata("design:type", Array)
], Kelas.prototype, "siswa", void 0);
exports.Kelas = Kelas = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Kelas);
//# sourceMappingURL=kelas.entity.js.map
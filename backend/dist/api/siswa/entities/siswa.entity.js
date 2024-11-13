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
exports.Siswa = void 0;
const kelas_entity_1 = require("../../../api/kelas/entities/kelas.entity");
const agama_entity_1 = require("../../../api/master/agama/entities/agama.entity");
const pelanggaran_entity_1 = require("../../../api/pelanggaran/entities/pelanggaran.entity");
const typeorm_1 = require("typeorm");
let Siswa = class Siswa {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.Siswa = Siswa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Siswa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "nama_lengkap", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "nis", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "nisn", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "tanggal_lahir", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "tempat_lahir", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "jenis_kelamin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "nama_wali", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "no_telp_wali", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: false,
    }),
    __metadata("design:type", String)
], Siswa.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => agama_entity_1.Agama, (agama) => agama.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agamaId' }),
    __metadata("design:type", agama_entity_1.Agama)
], Siswa.prototype, "agamaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kelas_entity_1.Kelas, (kelas) => kelas.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'kelasId' }),
    __metadata("design:type", kelas_entity_1.Kelas)
], Siswa.prototype, "kelasId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Siswa.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Siswa.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pelanggaran_entity_1.Pelanggaran, (pelanggaran) => pelanggaran.siswaId),
    __metadata("design:type", Array)
], Siswa.prototype, "pelanggaran", void 0);
exports.Siswa = Siswa = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Siswa);
//# sourceMappingURL=siswa.entity.js.map
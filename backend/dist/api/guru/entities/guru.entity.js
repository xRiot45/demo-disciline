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
exports.Guru = void 0;
const agama_entity_1 = require("../../../api/master/agama/entities/agama.entity");
const kelas_entity_1 = require("../../../api/kelas/entities/kelas.entity");
const status_entity_1 = require("../../../api/master/status/entities/status.entity");
const jabatan_entity_1 = require("../../../api/master/jabatan/entities/jabatan.entity");
const golongan_entity_1 = require("../../../api/master/golongan/entities/golongan.entity");
const typeorm_1 = require("typeorm");
let Guru = class Guru {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.Guru = Guru;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Guru.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
        nullable: false,
    }),
    __metadata("design:type", String)
], Guru.prototype, "nama_lengkap", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
        nullable: false,
    }),
    __metadata("design:type", String)
], Guru.prototype, "nip", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entity_1.Status, (status) => status.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'statusId' }),
    __metadata("design:type", status_entity_1.Status)
], Guru.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jabatan_entity_1.Jabatan, (jabatan) => jabatan.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'jabatanId' }),
    __metadata("design:type", jabatan_entity_1.Jabatan)
], Guru.prototype, "jabatanId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => golongan_entity_1.Golongan, (golongan) => golongan.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'golonganId' }),
    __metadata("design:type", golongan_entity_1.Golongan)
], Guru.prototype, "golonganId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => agama_entity_1.Agama, (agama) => agama.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agamaId' }),
    __metadata("design:type", agama_entity_1.Agama)
], Guru.prototype, "agamaId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Guru.prototype, "jenis_kelamin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 20,
        nullable: false,
    }),
    __metadata("design:type", String)
], Guru.prototype, "no_telp", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: false,
    }),
    __metadata("design:type", String)
], Guru.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Guru.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Guru.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => kelas_entity_1.Kelas, (kelas) => kelas.id),
    __metadata("design:type", kelas_entity_1.Kelas)
], Guru.prototype, "kelas", void 0);
exports.Guru = Guru = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Guru);
//# sourceMappingURL=guru.entity.js.map
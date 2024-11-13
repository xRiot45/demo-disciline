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
exports.Pelanggaran = void 0;
const siswa_entity_1 = require("../../../api/siswa/entities/siswa.entity");
const tipe_pelanggaran_entity_1 = require("../../../api/master/tipe-pelanggaran/entities/tipe-pelanggaran.entity");
const typeorm_1 = require("typeorm");
let Pelanggaran = class Pelanggaran {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.Pelanggaran = Pelanggaran;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Pelanggaran.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipe_pelanggaran_entity_1.TipePelanggaran, (tipePelanggaran) => tipePelanggaran.id, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'tipePelanggaranId' }),
    __metadata("design:type", tipe_pelanggaran_entity_1.TipePelanggaran)
], Pelanggaran.prototype, "tipePelanggaranId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => siswa_entity_1.Siswa, (siswa) => siswa.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'siswaId' }),
    __metadata("design:type", siswa_entity_1.Siswa)
], Pelanggaran.prototype, "siswaId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true,
    }),
    __metadata("design:type", String)
], Pelanggaran.prototype, "keterangan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Pelanggaran.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Pelanggaran.prototype, "updatedAt", void 0);
exports.Pelanggaran = Pelanggaran = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Pelanggaran);
//# sourceMappingURL=pelanggaran.entity.js.map
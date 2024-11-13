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
exports.TipePelanggaran = void 0;
const pelanggaran_entity_1 = require("../../../../api/pelanggaran/entities/pelanggaran.entity");
const typeorm_1 = require("typeorm");
let TipePelanggaran = class TipePelanggaran {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.TipePelanggaran = TipePelanggaran;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TipePelanggaran.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
        nullable: false,
    }),
    __metadata("design:type", String)
], TipePelanggaran.prototype, "nama_tipe_pelanggaran", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], TipePelanggaran.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], TipePelanggaran.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pelanggaran_entity_1.Pelanggaran, (pelanggaran) => pelanggaran.tipePelanggaranId),
    __metadata("design:type", Array)
], TipePelanggaran.prototype, "pelanggaran", void 0);
exports.TipePelanggaran = TipePelanggaran = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], TipePelanggaran);
//# sourceMappingURL=tipe-pelanggaran.entity.js.map
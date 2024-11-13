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
exports.Agama = void 0;
const guru_entity_1 = require("../../../../api/guru/entities/guru.entity");
const siswa_entity_1 = require("../../../../api/siswa/entities/siswa.entity");
const typeorm_1 = require("typeorm");
let Agama = class Agama {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.Agama = Agama;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Agama.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25,
        nullable: false,
    }),
    __metadata("design:type", String)
], Agama.prototype, "nama_agama", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Agama.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Agama.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => guru_entity_1.Guru, (guru) => guru.jabatanId),
    __metadata("design:type", Array)
], Agama.prototype, "guru", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => siswa_entity_1.Siswa, (siswa) => siswa.agamaId),
    __metadata("design:type", Array)
], Agama.prototype, "siswa", void 0);
exports.Agama = Agama = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Agama);
//# sourceMappingURL=agama.entity.js.map
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
exports.Jurusan = void 0;
const kelas_entity_1 = require("../../../../api/kelas/entities/kelas.entity");
const typeorm_1 = require("typeorm");
let Jurusan = class Jurusan {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
exports.Jurusan = Jurusan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Jurusan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 25,
        nullable: false,
    }),
    __metadata("design:type", String)
], Jurusan.prototype, "nama_jurusan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Jurusan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Jurusan.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => kelas_entity_1.Kelas, (kelas) => kelas.jurusanId),
    __metadata("design:type", Array)
], Jurusan.prototype, "kelas", void 0);
exports.Jurusan = Jurusan = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Jurusan);
//# sourceMappingURL=jurusan.entity.js.map
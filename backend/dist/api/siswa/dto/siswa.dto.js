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
exports.SiswaResponse = exports.SiswaRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class SiswaRequest {
}
exports.SiswaRequest = SiswaRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Nama Lengkap',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "nama_lengkap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'NIS',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "nis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'NISN',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "nisn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Tanggal Lahir',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "tanggal_lahir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Tempat Lahir',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "tempat_lahir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Jenis Kelamin',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "jenis_kelamin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Agama ID',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "agamaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Kelas ID',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "kelasId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Nama Wali',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "nama_wali", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'No Telp Wali',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "no_telp_wali", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Alamat',
    }),
    __metadata("design:type", String)
], SiswaRequest.prototype, "alamat", void 0);
class SiswaResponse {
}
exports.SiswaResponse = SiswaResponse;
//# sourceMappingURL=siswa.dto.js.map
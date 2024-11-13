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
exports.GuruResponse = exports.GuruRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class GuruRequest {
}
exports.GuruRequest = GuruRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Nama Lengkap',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "nama_lengkap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'NIP',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "nip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Status ID',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "statusId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Jabatan ID',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "jabatanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Golongan ID',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "golonganId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Agama ID',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "agamaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Jenis Kelamin',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "jenis_kelamin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Nomor Telepon',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "no_telp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Alamat',
    }),
    __metadata("design:type", String)
], GuruRequest.prototype, "alamat", void 0);
class GuruResponse {
}
exports.GuruResponse = GuruResponse;
//# sourceMappingURL=guru.dto.js.map
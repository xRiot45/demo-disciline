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
exports.JurusanResponse = exports.JurusanRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class JurusanRequest {
}
exports.JurusanRequest = JurusanRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Nama Jurusan',
    }),
    __metadata("design:type", String)
], JurusanRequest.prototype, "nama_jurusan", void 0);
class JurusanResponse {
}
exports.JurusanResponse = JurusanResponse;
//# sourceMappingURL=jurusan.dto.js.map
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
exports.UsersResponse = exports.SignInUsersResponse = exports.SignUpUsersResponse = exports.UpdatePasswordRequest = exports.SignInUsersRequest = exports.SignUpUsersRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignUpUsersRequest {
}
exports.SignUpUsersRequest = SignUpUsersRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Username',
    }),
    __metadata("design:type", String)
], SignUpUsersRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Password',
    }),
    __metadata("design:type", String)
], SignUpUsersRequest.prototype, "password", void 0);
class SignInUsersRequest {
}
exports.SignInUsersRequest = SignInUsersRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Username',
    }),
    __metadata("design:type", String)
], SignInUsersRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Password',
    }),
    __metadata("design:type", String)
], SignInUsersRequest.prototype, "password", void 0);
class UpdatePasswordRequest {
}
exports.UpdatePasswordRequest = UpdatePasswordRequest;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Password',
    }),
    __metadata("design:type", String)
], UpdatePasswordRequest.prototype, "password", void 0);
class SignUpUsersResponse {
}
exports.SignUpUsersResponse = SignUpUsersResponse;
class SignInUsersResponse {
}
exports.SignInUsersResponse = SignInUsersResponse;
class UsersResponse {
}
exports.UsersResponse = UsersResponse;
//# sourceMappingURL=users.dto.js.map
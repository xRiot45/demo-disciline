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
exports.AuthMiddleware = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
let AuthMiddleware = class AuthMiddleware {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async use(req, res, next) {
        const token = extractTokenFromHeaders(req.headers);
        try {
            const decoded = await this.validateToken(token);
            req.user = decoded;
            next();
        }
        catch (error) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async validateToken(token) {
        return this.jwtService.verify(token);
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthMiddleware);
function extractTokenFromHeaders(headers) {
    const authorizationHeader = headers['authorization'];
    if (!authorizationHeader) {
        throw new common_1.HttpException('Authorization header is missing', common_1.HttpStatus.UNAUTHORIZED);
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        throw new common_1.HttpException('Token is missing', common_1.HttpStatus.UNAUTHORIZED);
    }
    return token;
}
//# sourceMappingURL=auth.middleware.js.map
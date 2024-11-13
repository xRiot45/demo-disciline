"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const user_entity_1 = require("../../api/users/entities/user.entity");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const common_1 = require("@nestjs/common");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(entityManager) {
        super({
            ignoreExpiration: false,
            secretOrKey: `${process.env.JWT_SECRET}`,
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
        this.entityManager = entityManager;
    }
    async validate(payload) {
        const { username } = payload;
        const user = await this.entityManager.findOne(user_entity_1.Users, {
            where: { username },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.AuthDecorator = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user) {
        return user;
    }
    else {
        throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
    }
});
//# sourceMappingURL=auth.decorator.js.map
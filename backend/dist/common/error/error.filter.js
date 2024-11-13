"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFilter = void 0;
const zod_1 = require("zod");
const common_1 = require("@nestjs/common");
class ErrorFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        if (exception instanceof common_1.HttpException) {
            response.status(exception.getStatus()).json({
                errors: exception.message,
            });
        }
        else if (exception instanceof zod_1.ZodError) {
            response.status(400).json({
                errors: formatZodError(exception),
            });
        }
        else {
            response.status(500).json({
                errors: exception.message,
            });
        }
    }
}
exports.ErrorFilter = ErrorFilter;
function formatZodError(errors) {
    return errors.errors.map((err) => {
        return {
            field: err.path.join(' > '),
            message: err.message,
        };
    });
}
//# sourceMappingURL=error.filter.js.map
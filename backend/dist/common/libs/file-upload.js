"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFileName = exports.imageFileFilter = void 0;
const common_1 = require("@nestjs/common");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new common_1.HttpException('Only image  files are allowed!', common_1.HttpStatus.BAD_REQUEST), false);
    }
    if (file.size > 1024 * 1024 * 2) {
        return callback(new common_1.HttpException('File is too large!', common_1.HttpStatus.BAD_REQUEST), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const imageFileName = (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
};
exports.imageFileName = imageFileName;
//# sourceMappingURL=file-upload.js.map
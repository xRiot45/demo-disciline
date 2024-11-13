"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = require("helmet");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('Disciline RESTful API')
        .setDescription(' Disciline adalah aplikasi Sistem Informasi Pelanggaran Siswa (SIPS) yang bertujuan untuk mencatat, mengelola, dan melaporkan pelanggaran yang dilakukan siswa di lingkungan sekolah.')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/documentation', app, document);
    app.use((0, helmet_1.default)());
    app.use(cookieParser());
    app.enableCors({
        origin: true,
        credentials: true,
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
}
main();
//# sourceMappingURL=main.js.map
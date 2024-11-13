import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { JurusanRequest, JurusanResponse } from './dto/jurusan.dto';
export declare class JurusanService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: JurusanRequest): Promise<{
        data: JurusanResponse;
    }>;
    findAll(): Promise<{
        data: JurusanResponse[];
    }>;
    findById(jurusanId: string): Promise<{
        data: JurusanResponse;
    }>;
    update(jurusanId: string, req: JurusanRequest): Promise<{
        data: JurusanResponse;
    }>;
    delete(jurusanId: string): Promise<WebResponse>;
}

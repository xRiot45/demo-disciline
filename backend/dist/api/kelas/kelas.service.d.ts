import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../common/validation/validation.service';
import { KelasRequest, KelasResponse } from './dto/kelas.dto';
export declare class KelasService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: KelasRequest): Promise<{
        data: KelasResponse;
    }>;
    findAll(): Promise<{
        data: KelasResponse[];
    }>;
    findById(kelasId: string): Promise<{
        data: KelasResponse;
    }>;
    update(kelasId: string, req: KelasRequest): Promise<{
        data: KelasResponse;
    }>;
    delete(kelasId: string): Promise<WebResponse>;
}

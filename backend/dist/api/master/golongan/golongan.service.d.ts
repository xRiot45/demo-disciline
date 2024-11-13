import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { GolonganRequest, GolonganResponse } from './dto/golongan.dto';
export declare class GolonganService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: GolonganRequest): Promise<{
        data: GolonganResponse;
    }>;
    findAll(): Promise<{
        data: GolonganResponse[];
    }>;
    findById(golonganId: string): Promise<{
        data: GolonganResponse;
    }>;
    update(golonganId: string, req: GolonganRequest): Promise<{
        data: GolonganResponse;
    }>;
    delete(golonganId: string): Promise<WebResponse>;
}

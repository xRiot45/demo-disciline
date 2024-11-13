import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../common/validation/validation.service';
import { GuruRequest, GuruResponse } from './dto/guru.dto';
export declare class GuruService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: GuruRequest): Promise<{
        data: GuruResponse;
    }>;
    findAll(): Promise<{
        data: GuruResponse[];
    }>;
    findById(guruId: string): Promise<{
        data: GuruResponse;
    }>;
    update(guruId: string, req: GuruRequest): Promise<{
        data: GuruResponse;
    }>;
    delete(guruId: string): Promise<WebResponse>;
}

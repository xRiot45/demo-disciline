import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { AgamaRequest, AgamaResponse } from './dto/agama.dto';
export declare class AgamaService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: AgamaRequest): Promise<{
        data: AgamaResponse;
    }>;
    findAll(): Promise<{
        data: AgamaResponse[];
    }>;
    findById(agamaId: string): Promise<{
        data: AgamaResponse;
    }>;
    update(agamaId: string, req: AgamaRequest): Promise<{
        data: AgamaResponse;
    }>;
    delete(agamaId: string): Promise<WebResponse>;
}

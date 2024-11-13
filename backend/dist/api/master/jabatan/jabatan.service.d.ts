import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { JabatanRequest, JabatanResponse } from './dto/jabatan.dto';
export declare class JabatanService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: JabatanRequest): Promise<{
        data: JabatanResponse;
    }>;
    findAll(): Promise<{
        data: JabatanResponse[];
    }>;
    findById(jabatanId: string): Promise<{
        data: JabatanResponse;
    }>;
    update(jabatanId: string, req: JabatanRequest): Promise<{
        data: JabatanResponse;
    }>;
    delete(jabatanId: string): Promise<WebResponse>;
}

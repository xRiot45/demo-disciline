import { WebResponse } from '../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../common/validation/validation.service';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';
export declare class SiswaService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: SiswaRequest): Promise<{
        data: SiswaResponse;
    }>;
    findAll(): Promise<{
        data: SiswaResponse[];
    }>;
    findById(siswaId: string): Promise<{
        data: SiswaResponse;
    }>;
    update(siswaId: string, req: SiswaRequest): Promise<{
        data: SiswaResponse;
    }>;
    delete(siswaId: string): Promise<WebResponse>;
}

import { EntityManager } from 'typeorm';
import { ValidationService } from '../../common/validation/validation.service';
import { PelanggaranRequest, PelanggaranResponse } from './dto/pelanggaran.dto';
export declare class PelanggaranService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: PelanggaranRequest): Promise<{
        data: PelanggaranResponse;
    }>;
    findAll(): Promise<{
        data: PelanggaranResponse[];
    }>;
    findById(pelanggaranId: string): Promise<{
        data: PelanggaranResponse;
    }>;
    update(pelanggaranId: string, req: PelanggaranRequest): Promise<{
        data: PelanggaranResponse;
    }>;
}

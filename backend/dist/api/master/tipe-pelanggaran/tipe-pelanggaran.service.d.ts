import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { TipePelanggaranRequest, TipePelanggaranResponse } from './dto/tipe-pelanggaran.dto';
export declare class TipePelanggaranService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: TipePelanggaranRequest): Promise<{
        data: TipePelanggaranResponse;
    }>;
    findAll(): Promise<{
        data: TipePelanggaranResponse[];
    }>;
    findById(tipePelanggaranId: string): Promise<{
        data: TipePelanggaranResponse;
    }>;
    update(tipePelanggaranId: string, req: TipePelanggaranRequest): Promise<{
        data: TipePelanggaranResponse;
    }>;
    delete(tipePelanggaranId: string): Promise<WebResponse>;
}

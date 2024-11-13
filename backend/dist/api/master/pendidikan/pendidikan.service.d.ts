import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { PendidikanRequest, PendidikanResponse } from './dto/pendidikan.dto';
export declare class PendidikanService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: PendidikanRequest): Promise<{
        data: PendidikanResponse;
    }>;
    findAll(): Promise<{
        data: PendidikanResponse[];
    }>;
    findById(pendidikanId: string): Promise<{
        data: PendidikanResponse;
    }>;
    update(pendidikanId: string, req: PendidikanRequest): Promise<{
        data: PendidikanResponse;
    }>;
    delete(pendidikanId: string): Promise<WebResponse>;
}

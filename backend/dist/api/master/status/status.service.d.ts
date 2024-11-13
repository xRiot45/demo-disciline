import { WebResponse } from '../../../common/dto/web.dto';
import { EntityManager } from 'typeorm';
import { ValidationService } from '../../../common/validation/validation.service';
import { StatusRequest, StatusResponse } from './dto/status.dto';
export declare class StatusService {
    private readonly entityManager;
    private validationService;
    constructor(entityManager: EntityManager, validationService: ValidationService);
    create(req: StatusRequest): Promise<{
        data: StatusResponse;
    }>;
    findAll(): Promise<{
        data: StatusResponse[];
    }>;
    findById(statusId: string): Promise<{
        data: StatusResponse;
    }>;
    update(statusId: string, req: StatusRequest): Promise<{
        data: StatusResponse;
    }>;
    delete(statusId: string): Promise<WebResponse>;
}

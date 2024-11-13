import { WebResponse } from '../../../common/dto/web.dto';
import { StatusService } from './status.service';
import { StatusRequest, StatusResponse } from './dto/status.dto';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
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

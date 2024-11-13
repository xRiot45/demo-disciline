import { GuruService } from './guru.service';
import { WebResponse } from '../../common/dto/web.dto';
import { GuruRequest, GuruResponse } from './dto/guru.dto';
export declare class GuruController {
    private readonly guruService;
    constructor(guruService: GuruService);
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

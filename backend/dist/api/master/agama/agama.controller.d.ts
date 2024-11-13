import { WebResponse } from '../../../common/dto/web.dto';
import { AgamaService } from './agama.service';
import { AgamaRequest, AgamaResponse } from './dto/agama.dto';
export declare class AgamaController {
    private readonly agamaService;
    constructor(agamaService: AgamaService);
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

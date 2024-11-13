import { WebResponse } from '../../../common/dto/web.dto';
import { JabatanService } from './jabatan.service';
import { JabatanRequest, JabatanResponse } from './dto/jabatan.dto';
export declare class JabatanController {
    private readonly jabatanService;
    constructor(jabatanService: JabatanService);
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

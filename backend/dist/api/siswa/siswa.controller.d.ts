import { WebResponse } from '../../common/dto/web.dto';
import { SiswaService } from './siswa.service';
import { SiswaRequest, SiswaResponse } from './dto/siswa.dto';
export declare class SiswaController {
    private readonly siswaService;
    constructor(siswaService: SiswaService);
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

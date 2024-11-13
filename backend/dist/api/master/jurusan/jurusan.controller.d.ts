import { WebResponse } from '../../../common/dto/web.dto';
import { JurusanService } from './jurusan.service';
import { JurusanRequest, JurusanResponse } from './dto/jurusan.dto';
export declare class JurusanController {
    private readonly jurusanService;
    constructor(jurusanService: JurusanService);
    create(req: JurusanRequest): Promise<{
        data: JurusanResponse;
    }>;
    findAll(): Promise<{
        data: JurusanResponse[];
    }>;
    findById(jurusanId: string): Promise<{
        data: JurusanResponse;
    }>;
    update(jurusanId: string, req: JurusanRequest): Promise<{
        data: JurusanResponse;
    }>;
    delete(jurusanId: string): Promise<WebResponse>;
}

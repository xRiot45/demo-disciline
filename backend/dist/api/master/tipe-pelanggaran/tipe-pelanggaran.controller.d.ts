import { WebResponse } from '../../../common/dto/web.dto';
import { TipePelanggaranService } from './tipe-pelanggaran.service';
import { TipePelanggaranRequest, TipePelanggaranResponse } from './dto/tipe-pelanggaran.dto';
export declare class TipePelanggaranController {
    private readonly tipePelanggaranService;
    constructor(tipePelanggaranService: TipePelanggaranService);
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

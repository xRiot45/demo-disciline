import { PelanggaranService } from './pelanggaran.service';
import { PelanggaranRequest, PelanggaranResponse } from './dto/pelanggaran.dto';
export declare class PelanggaranController {
    private readonly pelanggaranService;
    constructor(pelanggaranService: PelanggaranService);
    create(req: PelanggaranRequest): Promise<{
        data: PelanggaranResponse;
    }>;
    findAll(): Promise<{
        data: PelanggaranResponse[];
    }>;
    findById(pelanggaranId: string): Promise<{
        data: PelanggaranResponse;
    }>;
    update(pelanggaranId: string, req: PelanggaranRequest): Promise<{
        data: PelanggaranResponse;
    }>;
}

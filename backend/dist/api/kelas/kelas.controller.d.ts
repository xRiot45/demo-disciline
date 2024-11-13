import { KelasService } from './kelas.service';
import { KelasRequest, KelasResponse } from './dto/kelas.dto';
export declare class KelasController {
    private readonly kelasService;
    constructor(kelasService: KelasService);
    create(req: KelasRequest): Promise<{
        data: KelasResponse;
    }>;
    findAll(): Promise<{
        data: KelasResponse[];
    }>;
    findById(kelasId: string): Promise<{
        data: KelasResponse;
    }>;
    update(kelasId: string, req: KelasRequest): Promise<{
        data: KelasResponse;
    }>;
    delete(kelasId: string): Promise<{
        message: string;
    }>;
}

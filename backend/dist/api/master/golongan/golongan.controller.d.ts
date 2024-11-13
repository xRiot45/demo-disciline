import { WebResponse } from '../../../common/dto/web.dto';
import { GolonganService } from './golongan.service';
import { GolonganRequest, GolonganResponse } from './dto/golongan.dto';
export declare class GolonganController {
    private readonly golonganService;
    constructor(golonganService: GolonganService);
    create(req: GolonganRequest): Promise<{
        data: GolonganResponse;
    }>;
    findAll(): Promise<{
        data: GolonganResponse[];
    }>;
    findById(golonganId: string): Promise<{
        data: GolonganResponse;
    }>;
    update(golonganId: string, req: GolonganRequest): Promise<{
        data: GolonganResponse;
    }>;
    delete(golonganId: string): Promise<WebResponse>;
}

import { WebResponse } from '../../../common/dto/web.dto';
import { PendidikanService } from './pendidikan.service';
import { PendidikanRequest, PendidikanResponse } from './dto/pendidikan.dto';
export declare class PendidikanController {
    private readonly pendidikanService;
    constructor(pendidikanService: PendidikanService);
    create(req: PendidikanRequest): Promise<{
        data: PendidikanResponse;
    }>;
    findAll(): Promise<{
        data: PendidikanResponse[];
    }>;
    findById(pendidikanId: string): Promise<{
        data: PendidikanResponse;
    }>;
    update(pendidikanId: string, req: PendidikanRequest): Promise<{
        data: PendidikanResponse;
    }>;
    delete(pendidikanId: string): Promise<WebResponse>;
}

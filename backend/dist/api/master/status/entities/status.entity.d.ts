import { Guru } from '../../../../api/guru/entities/guru.entity';
export declare class Status {
    id: string;
    nama_status: string;
    createdAt: Date;
    updatedAt: Date;
    guru: Guru[];
    constructor(partial: Partial<Status>);
}

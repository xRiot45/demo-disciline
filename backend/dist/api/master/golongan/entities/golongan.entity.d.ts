import { Guru } from '../../../../api/guru/entities/guru.entity';
export declare class Golongan {
    id: string;
    nama_golongan: string;
    createdAt: Date;
    updatedAt: Date;
    guru: Guru[];
    constructor(partial: Partial<Golongan>);
}

import { Guru } from '../../../../api/guru/entities/guru.entity';
export declare class Pendidikan {
    id: string;
    nama_pendidikan: string;
    createdAt: Date;
    updatedAt: Date;
    guru: Guru[];
    constructor(partial: Partial<Pendidikan>);
}

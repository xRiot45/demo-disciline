import { Guru } from '../../../../api/guru/entities/guru.entity';
export declare class Jabatan {
    id: string;
    nama_jabatan: string;
    createdAt: Date;
    updatedAt: Date;
    guru: Guru[];
    constructor(partial: Partial<Jabatan>);
}

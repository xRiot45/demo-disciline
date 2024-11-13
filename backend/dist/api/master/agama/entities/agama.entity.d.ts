import { Guru } from '../../../../api/guru/entities/guru.entity';
import { Siswa } from '../../../../api/siswa/entities/siswa.entity';
export declare class Agama {
    id: string;
    nama_agama: string;
    createdAt: Date;
    updatedAt: Date;
    guru: Guru[];
    siswa: Siswa[];
    constructor(partial: Partial<Agama>);
}

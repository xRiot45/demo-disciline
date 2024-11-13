import { Kelas } from '../../../../api/kelas/entities/kelas.entity';
export declare class Jurusan {
    id: string;
    nama_jurusan: string;
    createdAt: Date;
    updatedAt: Date;
    kelas: Kelas[];
    constructor(partial: Partial<Jurusan>);
}

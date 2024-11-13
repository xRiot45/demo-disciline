import { Guru } from '../../../api/guru/entities/guru.entity';
import { Siswa } from '../../../api/siswa/entities/siswa.entity';
import { Jurusan } from '../../../api/master/jurusan/entities/jurusan.entity';
export declare class Kelas {
    id: string;
    nama_kelas: string;
    createdAt: Date;
    updatedAt: Date;
    jurusanId: Jurusan;
    guruId: Guru;
    siswa: Siswa[];
    constructor(partial: Partial<Kelas>);
}

import { Siswa } from '../../../api/siswa/entities/siswa.entity';
import { TipePelanggaran } from '../../../api/master/tipe-pelanggaran/entities/tipe-pelanggaran.entity';
export declare class Pelanggaran {
    id: string;
    tipePelanggaranId: TipePelanggaran;
    siswaId: Siswa;
    keterangan: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<Pelanggaran>);
}

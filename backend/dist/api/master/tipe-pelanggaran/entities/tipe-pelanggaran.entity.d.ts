import { Pelanggaran } from '../../../../api/pelanggaran/entities/pelanggaran.entity';
export declare class TipePelanggaran {
    id: string;
    nama_tipe_pelanggaran: string;
    createdAt: Date;
    updatedAt: Date;
    pelanggaran: Pelanggaran[];
    constructor(partial: Partial<TipePelanggaran>);
}

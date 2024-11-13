import { Kelas } from '../../../api/kelas/entities/kelas.entity';
import { Agama } from '../../../api/master/agama/entities/agama.entity';
import { Pelanggaran } from '../../../api/pelanggaran/entities/pelanggaran.entity';
export declare class Siswa {
    id: string;
    nama_lengkap: string;
    nis: string;
    nisn: string;
    tanggal_lahir: string;
    tempat_lahir: string;
    jenis_kelamin: string;
    nama_wali: string;
    no_telp_wali: string;
    alamat: string;
    agamaId: Agama;
    kelasId: Kelas;
    createdAt: Date;
    updatedAt: Date;
    pelanggaran: Pelanggaran[];
    constructor(partial: Partial<Siswa>);
}

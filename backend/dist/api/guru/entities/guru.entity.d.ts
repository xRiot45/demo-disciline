import { Agama } from '../../../api/master/agama/entities/agama.entity';
import { Kelas } from '../../../api/kelas/entities/kelas.entity';
import { Status } from '../../../api/master/status/entities/status.entity';
import { Jabatan } from '../../../api/master/jabatan/entities/jabatan.entity';
import { Golongan } from '../../../api/master/golongan/entities/golongan.entity';
export declare class Guru {
    id: string;
    nama_lengkap: string;
    nip: string;
    statusId: Status;
    jabatanId: Jabatan;
    golonganId: Golongan;
    agamaId: Agama;
    jenis_kelamin: string;
    no_telp: string;
    alamat: string;
    createdAt: Date;
    updatedAt: Date;
    kelas: Kelas;
    constructor(partial: Partial<Guru>);
}

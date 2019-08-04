import { OrigemBo } from './origemBo';

export class Boletim {
    codigo: number;
    pmsecao: string;
    nomepmsecao: string;
    dataSys: Date;
    boletim: number;
    tipoBoletim: number;
    origemBoletim = new OrigemBo();
    data: Date;
    emissorBo: string;
    nomeEmissor: string;
    status: number;
    monta: number;
    vitima: string;
    autor: string;
    placa: string;
    municipio: string;
    barreira: string;
    problema: string;
    solucao: string;
    obs: string;

    dataProvidencia: Date;
    envioDetran: number;
    providencia: string;


}

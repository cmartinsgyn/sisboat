import { OrigemBo } from './origemBo';

export class Cadastro {
    codigo: number;
    pmsecao: string;
    dataSys: Date;
    boletim: number;
    tipoBoletim: number;
    origemBo = new OrigemBo();
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

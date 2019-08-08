import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class OrigemBoletimService {
    tiposBoletins = [];

    public carregarTiposBoletim() {
     // substituir pela busca no back enda que provavel ser um enum
    this.tiposBoletins = [
      { codigo: 1, descricao: 'BOC' },
      { codigo: 2, descricao: 'BOAT' }
    ];
     return this.tiposBoletins
    }
}

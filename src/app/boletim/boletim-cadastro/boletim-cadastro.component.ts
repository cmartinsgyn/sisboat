import { Component, OnInit, Input } from '@angular/core';

class Boletim {
  codigo: any;
  rg: string;
  nome: string;
  dataSys: string;
  nboletim: string;
  }

@Component({
  selector: 'app-boletim-cadastro',
  templateUrl: './boletim-cadastro.component.html',
  styleUrls: ['./boletim-cadastro.component.css']
})
export class BoletimCadastroComponent implements OnInit {
 placa = new RegExp('[a-zA-Z]{3}[0-9]{4}');
 checked = false;
 myModel: any;
 pmsecao: any;
 boletim = new Boletim();

 constructor() { }

  ngOnInit() {
    this.boletim.codigo = '001';
    this.boletim.rg = '31355';
    this.boletim.nome = 'Cláudio Martins da Silva';
    this.boletim.dataSys = '20/06/2019 17:24';
    this.pmsecao = this.boletim.rg + '  ' + this.boletim.nome
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private title: Title
 ) { }

  ngOnInit() {
    this.title.setTitle('Novo Boletim');
    const codigo = this.route.snapshot.params['codigo'];

    if (codigo) {
      this.editar(codigo);
    }
  }

  editar(codigo: number) {
    console.log(codigo);
  }

}

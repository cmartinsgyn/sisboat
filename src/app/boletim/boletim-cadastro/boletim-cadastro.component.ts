import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

import { ValidacoesUtil } from 'app/core/validacoes-util';
import { Boletim } from 'app/core/model/boletim';

@Component({
  selector: 'app-boletim-cadastro',
  templateUrl: './boletim-cadastro.component.html',
  styleUrls: ['./boletim-cadastro.component.css']
})
export class BoletimCadastroComponent implements OnInit {
  /** define o paramêtro se está ou não em edição*/
  get editando() {
    return Boolean(false);
  }

 boletim = new Boletim();
 tiposBoletins = [];
 origemBoletins = [];
 form: FormGroup;
 submitted = false;
 bolMin = 7; bolMax = 9;

 constructor(
  private route: ActivatedRoute,
  private toastyService: ToastyService,
  private router: Router,
  private title: Title,
  public fb: FormBuilder,
 ) { }

  ngOnInit() {
    this.title.setTitle('Novo Boletim');
    const codigo = this.route.snapshot.params['codigo'];
    this.criarFormulario();
    this.carregarTiposBoletim();
    this.carregarOrigemBoletim();

    if (codigo) {
      this.editar(codigo);
    }
  }

  // pegar campos do form
  get f() { return this.form.controls; }

  carregarTiposBoletim() {
    // substituir pela busca no back enda que provavel ser um enum
    this.tiposBoletins = [
      { value: 1, descricao: 'BOC' },
      { value: 2, descricao: 'BOAT' }
    ];
  }

  carregarOrigemBoletim() {
    // substituir pela busca no banco pois vai ser cadastrado pelo usuário
    this.origemBoletins = [
      { value: 1, descricao: 'RAI' },
      { value: 2, descricao: 'TALONARIO' },
      { value: 2, descricao: 'MANUAL' }

    ];
  }

  salvar() {
    this.submitted = true;
    this.boletim = this.form.value

        // stop se formulário for inválido
        if (this.form.invalid) {
            return;
        }

        // display caso seja sucesso
        this.toastyService.success('Item cadastrado com sucesso!')
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
        console.log(this.boletim.boletim);
        this.form.reset();
    }

    onReset() {
        this.submitted = false;
        this.form.reset();
    }

    criarFormulario() {
      this.form = this.fb.group({
        codigo: [{value: 1, disabled: true}],
        pmsecao: [{value: 31355, disabled: true}],
        nomepmsecao: [{value: 'Cláudio Martins da Silva', disabled: true}],
        dataSys: [{value: new FormControl(new Date()), disabled: true}],
        cpf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(11)]],
        boletim: ['', [Validators.required, Validators.minLength(this.bolMin), Validators.maxLength(this.bolMax)]],
        tipoBoletim: ['', Validators.required],
        origemBoletim: ['', Validators.required],
        data: ['',  Validators.required],
        emissorBo: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(6)]],
        nomeEmissor: [''],
        status: [''],
        monta: [''],
        vitima: [''],
        autor: [''],
        placa: [''],
        municipio: [''],
        barreira: [''],
        problema: [''],
        solucao: [''],
        obs: [''],

        dataProvidencia: [''],
        envioDetran: [''],
        providencia: ['']

      }, {
        // validator: ValidacoesUtil.ValidaCpf
      }
      );
    }

  atualizarTituloEdicao() {
   //  this.title.setTitle(`Edição Lançamento: ${this.lancamento.descricao}`);
}

  editar(codigo: number) {
    console.log(codigo);
  }

}

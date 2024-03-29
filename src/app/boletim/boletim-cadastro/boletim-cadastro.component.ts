import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

import { Boletim } from 'app/core/model/boletim';
import { BoletimService } from './../boletim.service';
import { OrigemBoletimService } from 'app/cadastros/origem-boletim/origem-boletim.service';
import { CrossFieldErrorMatcher } from 'app/core/cross-field-error-matcher';

@Component({
  selector: 'app-boletim-cadastro',
  templateUrl: './boletim-cadastro.component.html',
  styleUrls: ['./boletim-cadastro.component.css']
})
export class BoletimCadastroComponent implements OnInit {
  /** define o paramêtro se está ou não em edição*/
  get editando() {
    return Boolean(this.boletim.codigo);
  }

 boletim = new Boletim();
 tiposBoletins = [];
 origemBoletins = [];
 status = [];
 montas = [];
 barreiras = [];
 exigeProblema: Boolean = false;
 form: FormGroup;
 submitted = false;
 erro = new CrossFieldErrorMatcher();
 bolMin = 9; bolMax = 9;
 dataAtual: any;

 constructor(
  private route: ActivatedRoute,
  private toastyService: ToastyService,
  private router: Router,
  private title: Title,
  public fb: FormBuilder,
  private origemBoletimService: OrigemBoletimService
 ) { }

  ngOnInit() {
    this.title.setTitle('Novo Boletim');
    const codigo = this.route.snapshot.params['codigo'];
    this.carregarTiposBoletim();
    this.carregarOrigemBoletim();
    this.carregarStatus();
    this.carregarMonta();
    this.carregarBarreira();
    this.criarFormulario();

    if (codigo) {
      this.editar(codigo);
    } else {
      this.novo();
    }
  }

  // pegar campos do form
  get f() { return this.form.controls; }

  carregarTiposBoletim() {
    this.tiposBoletins = this.origemBoletimService.carregarTiposBoletim();
  }
  carregarOrigemBoletim() {
  // substituir pela busca no banco pois vai ser cadastrado pelo usuário
    this.origemBoletins = [
      { codigo: 1, descricao: 'RAI' },
      { codigo: 2, descricao: 'TALONARIO' },
      { codigo: 3, descricao: 'MANUAL' }
    ];
  }

  carregarStatus() {
    // substituir pela busca no back enda que provavel ser um enum
    this.status = [
      { codigo: 1, descricao: 'Disponivel' },
      { codigo: 2, descricao: 'Pendente' },
      { codigo: 3, descricao: 'Resolvido' }
    ];
  }
  carregarMonta() {
    // substituir pela busca no back enda que provavel ser um enum
    this.montas = [
      { codigo: 1, descricao: 'Pequena' },
      { codigo: 2, descricao: 'Média' },
      { codigo: 3, descricao: 'Grande' }
    ];
  }
  carregarBarreira() {
    // substituir pela busca no banco pois vai ser cadastrado pelo usuário
    this.barreiras = [
      { codigo: 1, descricao: 'G070', unidade: 1 },
      { codigo: 2, descricao: 'GO060', unidade: 1 },
      { codigo: 3, descricao: 'GO020', unidade: 2 }
    ];
  }

  functionExigeProblema (status: number) {
    console.log(status);
    if (status === 2) {
    this.exigeProblema = true;
    }
  }

  salvar() {
    this.submitted = true;
    this.boletim = this.form.value;

        // stop se formulário for inválido
        if (this.form.invalid) {
            return;
        }

        // display caso seja sucesso
        this.toastyService.success('Item cadastrado com sucesso!');
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
       console.log(this.boletim);

       this.onReset();
       // tslint:disable-next-line: no-unused-expression
       this.form.valid;


    }

    onReset() {
      this.form.reset();
      this.submitted = false;
      this.boletim = new Boletim();
      this.title.setTitle('Novo Boletim');
    }

    novo () {
      this.onReset();

       // substituir pelas pesquisas user logado.
       this.boletim.pmsecao = '31355';
       this.boletim.nomepmsecao = 'Claudio Martins da Silva';

       this.dataAtual = new Date().toISOString().substring(0, 10);
       this.boletim.dataSys = this.dataAtual
      this.criarFormulario();

    }

    criarFormulario() {

      this.form = this.fb.group({
        codigo: new FormControl({value: this.boletim.codigo, disabled: true}),
        pmsecao: new FormControl({value: this.boletim.pmsecao, disabled: true}, Validators.required),
        nomepmsecao: new FormControl({value: this.boletim.nomepmsecao, disabled: true}, Validators.required),
        dataSys: new FormControl({value: this.boletim.dataSys, disabled: true }, Validators.required),
        boletim: [this.boletim.boletim, [Validators.required, Validators.minLength(this.bolMin),
          Validators.maxLength(this.bolMax)]],
        tipoBoletim: [this.boletim.tipoBoletim, Validators.required],
        origemBoletim: ['', Validators.required],
        data: ['',  Validators.required],
        emissorBo: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(6)]],
        nomeEmissor: [{value: '', disabled: true}],
        status: ['', Validators.required],
        monta: ['', Validators.required],
        vitima: ['', [Validators.minLength(7), Validators.maxLength(250)]],
        autor: ['', [Validators.minLength(7), Validators.maxLength(250)]],
        placa: ['', [Validators.required,  Validators.minLength(7), Validators.maxLength(7)]],
        municipio: [''],
        barreira: ['', Validators.required],
        problema: ['', [Validators.minLength(7), Validators.maxLength(250)]],
        solucao: ['', [Validators.minLength(7), Validators.maxLength(250)]],
        obs: ['', [Validators.minLength(7), Validators.maxLength(250)]],

        dataProvidencia: [''],
        envioDetran: [''],
        providencia: ['', [Validators.minLength(7), Validators.maxLength(250)]]

      }, {
      //  updateOn: 'blur',
       updateValueIfValid: true
      }
      );

    }

  editar(codigo: number) {
   // buscar no back and pelo codigo(passando para o serviço)
    this.boletim.codigo = codigo;
    this.boletim.boletim = 123456;
    this.boletim.tipoBoletim = 'BOAT';
    this.boletim.pmsecao = '31355';
    this.boletim.nomepmsecao = 'Claudio Martins da Silva';
    // this.boletim.dataSys = '01/01/2001';

    this.criarFormulario();
    this.atualizarTituloEdicao();
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição do Boletim`);
 }

}

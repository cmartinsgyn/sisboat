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
 form: FormGroup;
 submitted = false;
 bolMin = 7; bolMax = 7;

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

    if (codigo) {
      this.editar(codigo);
    }
  }

  // pegar campos do form
  get f() { return this.form.controls; }

  salvar() {
    this.submitted = true;

        // stop se formulário for inválido
        if (this.form.invalid) {
            return;
        }

        // display caso seja sucesso
        this.toastyService.success('Item cadastrado com sucesso!')
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
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
        cpf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(11)]],
        boletim: ['', [Validators.required, Validators.minLength(this.bolMin), Validators.maxLength(this.bolMax)]],
        tipoBoletim: [''],
        origemBo: [''],
        data: [''],
        emissorBo: [''],
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

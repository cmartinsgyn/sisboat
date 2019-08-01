import { Component, OnInit } from '@angular/core';
import { Validators, NgForm, FormGroup, FormBuilder, FormControl, FormGroupDirective, AbstractControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';

import { ValidacoesUtil } from 'app/core/validacoes-util';
import { OrigemBo } from 'app/core/model/origemBo';
@Component({
  selector: 'app-origem-boletim',
  templateUrl: './origem-boletim.component.html',
  styleUrls: ['./origem-boletim.component.scss']
})
export class OrigemBoletimComponent implements OnInit {
  /** define o paramêtro se está ou não em edição*/
  get editando() {
    return Boolean(false);
  }

  origem = new OrigemBo();
  form: FormGroup;
  submitted = false;
  // tslint:disable-next-line: no-use-before-declare
  erro = new CrossFieldErrorMatcher();


  constructor(
    private title: Title,
    private toastyService: ToastyService,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.title.setTitle('Nova Origem Boletim');
    this.criarFormulario();

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
        nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(11)]]
      }, {
        validator: ValidacoesUtil.ValidaCpf
      }
      );
    }

  atualizarTituloEdicao() {
   //  this.title.setTitle(`Edição Lançamento: ${this.lancamento.descricao}`);
}

}

/** Error when the parent is invalid */
class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

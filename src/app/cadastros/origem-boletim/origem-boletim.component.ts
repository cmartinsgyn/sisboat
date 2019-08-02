import { Component, OnInit } from '@angular/core';
import { Validators, NgForm, FormGroup, FormBuilder, FormControl, FormGroupDirective, AbstractControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


import { ValidacoesUtil } from 'app/core/validacoes-util';
import { OrigemBo } from 'app/core/model/origemBo';
import { CrossFieldErrorMatcher } from 'app/core/cross-field-error-matcher';
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
        codigo: new FormControl({value: '', disabled: true}, Validators.required),
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
// class CrossFieldErrorMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     return control.dirty && form.invalid;
//   }
// }

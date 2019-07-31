import { Component, OnInit } from '@angular/core';
import { Validators, NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrigemBo } from 'app/core/model/origemBo';
import { ToastyService } from 'ng2-toasty';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-origem-boletim',
  templateUrl: './origem-boletim.component.html',
  styleUrls: ['./origem-boletim.component.scss']
})
export class OrigemBoletimComponent implements OnInit {

  origem = new OrigemBo();
  form: FormGroup

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

  /** define o paramêtro se está ou não em edição*/
  get editando() {
    return Boolean(false);
  }

  salvar(form: FormGroup) {
    this.origem = this.form.value;

    console.log(`Origem BO: ${this.origem.nome}`);
    this.toastyService.success('Item cadastrado com sucesso!');

    this.form.reset();
    this.router.navigate(['/cadastro-origem-boletim']);

  }

  criarFormulario() {
    this.form = this.fb.group({
      nome: ['',
       Validators.compose([
         Validators.required,
         Validators.minLength(2),
         Validators.maxLength(100)
         ])
      ],

    });
  }

  atualizarTituloEdicao() {
   //  this.title.setTitle(`Edição Lançamento: ${this.lancamento.descricao}`);
}

    /* Handle form errors in Angular 8 */
    public errorHandling = (control: string, error: string) => {
      return this.form.controls[control].hasError(error);
    }
}

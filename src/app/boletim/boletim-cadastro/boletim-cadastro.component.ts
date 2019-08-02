import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { ValidacoesUtil } from 'app/core/validacoes-util';

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
  /** define o paramêtro se está ou não em edição*/
  get editando() {
    return Boolean(false);
  }

 boletim = new Boletim();
 form: FormGroup;
 submitted = false;

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
       // nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(11)]]
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

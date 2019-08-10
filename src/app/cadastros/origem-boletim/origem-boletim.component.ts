import { Boletim } from './../../core/model/boletim';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, NgForm, FormGroup, FormBuilder, FormControl, } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';


import { ValidacoesUtil } from 'app/core/validacoes-util';
import { OrigemBo } from 'app/core/model/origemBo';
import { CrossFieldErrorMatcher } from 'app/core/cross-field-error-matcher';
import { ConfirmaExclusaoDialog } from 'app/boletim/boletim-list/boletim-list.component';
@Component({
  selector: 'app-origem-boletim',
  templateUrl: './origem-boletim.component.html',
  styleUrls: ['./origem-boletim.component.scss']
})
export class OrigemBoletimComponent implements OnInit {
  /*TABELA*/
  displayedColumns: string[] = ['codigo', 'data', 'nome', 'responsavel', 'acoes'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource =  new MatTableDataSource<OrigemBo>(LISTA);
  dados: string;
  exclui: boolean;

  origem = new OrigemBo();
  form: FormGroup;
  submitted = false;
  erro = new CrossFieldErrorMatcher();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    private title: Title,
    private toastyService: ToastyService,
    public fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.title.setTitle('Nova Origem Boletim');
    this.criarFormulario();
    this.dataSource.paginator = this.paginator;

  }

  /* FORM CADASTRO*/
 /** define o paramêtro se está ou não em edição*/
 get editando() {
  return Boolean(false);
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
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
        this.form.reset();
    }

    onReset() {
        this.submitted = false;
        this.form.reset();
    }

    criarFormulario() {
      this.form = this.fb.group({
        codigo: new FormControl({value: '', disabled: true}),
        nome: ['', Validators.compose([Validators.required, Validators.minLength(2),
          Validators.maxLength(250)])]
      }, {
       // validator: ValidacoesUtil.ValidaCpf
      }
      );
    }

  atualizarTituloEdicao() {
   //  this.title.setTitle(`Edição Lançamento: ${this.lancamento.descricao}`);
}

openDialog(elemento: any): void {
  // tslint:disable-next-line: no-use-before-declare
  const dialogRef = this.dialog.open(ConfirmaExclusaoDialog, {
    width: '350px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      console.log(true)
      this.excluir(elemento);
    }
  });
}
/** chama o serviço para exclusão */
excluir(elemento: any) {
  console.log('Serviço Excluir item código ' + elemento.codigo);

}

}

const LISTA: OrigemBo[] = [
  {codigo: 1, data: '05/07/2019', nome: 'RAI', responsavel: 'Claudio Martins da Silva'},
  {codigo: 2, data: '06/07/2019', nome: 'TALONÁRIO', responsavel: 'Claudio Martins da Silva'},
  {codigo: 3, data: '07/07/2019', nome: 'MANUAL', responsavel: 'Claudio Martins da Silva'},
  {codigo: 4, data: '08/07/2019', nome: 'OUTRO', responsavel: 'Fulano da Silva'},
  {codigo: 5, data: '03/07/2019', nome: 'OUTRO', responsavel: 'Cicrano de Assis'},
  {codigo: 6, data: '09/07/2019', nome: 'OUTRO', responsavel: 'Fulano da Silva'},
  {codigo: 7, data: '10/07/2019', nome: 'OUTRO', responsavel: 'Cicrano de Assis'}
];

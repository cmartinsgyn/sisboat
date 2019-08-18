import { element } from 'protractor';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boletim-list',
  templateUrl: './boletim-list.component.html',
  styleUrls: ['./boletim-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BoletimListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'boletim', 'data', 'tipoOcorrencia', 'monta', 'status', 'acoes'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource =  new MatTableDataSource<Boletins>(LISTA);
  expandedElement: Boletins | null;
  dados: string;
  exclui: boolean;
  boletimExluir: any

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.title.setTitle('Lista de Boletins');
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private title: Title,
    public dialog: MatDialog,
  ) { }

  openDialog(elemento: any): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ConfirmaExclusaoBoletimDialog, {
      width: '350px',
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
    alert('Excluído boletim ' + elemento.boletim);

  }

}// end class

export class Boletins {
  data: string;
  codigo: number;
  boletim: number;
  tipoOcorrencia: string;
  monta: string;
  status: string;
}

/*Confirmação de exclusão*/
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'confirma-exclusao-boletim-dialog',
  templateUrl: 'confirma-exclusao-boletim-dialog.html',
})
// tslint:disable-next-line: component-class-suffix
export class ConfirmaExclusaoBoletimDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfirmaExclusaoBoletimDialog>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


const LISTA: Boletins[] = [
  {codigo: 1, data: '05/07/2019', boletim: 100791, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 2, data: '05/07/2019', boletim: 400261, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 3, data: '05/07/2019', boletim: 694112, tipoOcorrencia: 'BOC', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 4, data: '05/07/2019', boletim: 901221, tipoOcorrencia: 'BOC', monta: 'Media', status: 'Disponivel'},
  {codigo: 5, data: '05/07/2019', boletim: 108113, tipoOcorrencia: 'Boat', monta: 'Grande', status: 'Resolvido'},
  {codigo: 6, data: '05/07/2019', boletim: 120107, tipoOcorrencia: 'Boat', monta: 'Media', status: 'Pendente'},
  {codigo: 7, data: '05/07/2019', boletim: 140067, tipoOcorrencia: 'Boat', monta: 'Grande', status: 'Disponivel'},
  {codigo: 8, data: '05/07/2019', boletim: 159994, tipoOcorrencia: 'Boat', monta: 'Grande', status: 'Pendente'},
  {codigo: 9, data: '05/07/2019', boletim: 189984, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Pendente'},
  {codigo: 10, data: '05/07/2019', boletim: 201797, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 11, data: '05/07/2019', boletim: 229897, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 12, data: '05/07/2019', boletim: 243052, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 13, data: '05/07/2019', boletim: 269815, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 14, data: '05/07/2019', boletim: 280855, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Pendente'},
  {codigo: 15, data: '05/07/2019', boletim: 309738, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Pendente'},
  {codigo: 16, data: '05/07/2019', boletim: 320655, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Resolvido'},
  {codigo: 17, data: '05/07/2019', boletim: 35453, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 18, data: '05/07/2019', boletim: 399483, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
  {codigo: 19, data: '05/07/2019', boletim: 390983, tipoOcorrencia: 'Boat', monta: 'Grande', status: 'Pendente'},
  {codigo: 20, data: '05/07/2019', boletim: 400780, tipoOcorrencia: 'Boat', monta: 'Pequena', status: 'Disponivel'},
];


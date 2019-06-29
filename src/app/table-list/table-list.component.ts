import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'weight', 'name', 'tipoOcorrencia', 'symbol', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Boletins>(LISTA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export class Boletins {
  name: string;
  codigo: number;
  weight: number;
  tipoOcorrencia: string;
  symbol: string;
  status: string;
}

const LISTA: Boletins[] = [
  {codigo: 1, name: 'Hydrogen', weight: 1.0079, tipoOcorrencia: 'Boat', symbol: 'H', status: ''},
  {codigo: 2, name: 'Helium', weight: 4.0026, tipoOcorrencia: 'Boat', symbol: 'He', status: ''},
  {codigo: 3, name: 'Lithium', weight: 6.941, tipoOcorrencia: 'BOC', symbol: 'Li', status: ''},
  {codigo: 4, name: 'Beryllium', weight: 9.0122, tipoOcorrencia: 'BOC', symbol: 'Be', status: 'Disponivel'},
  {codigo: 5, name: 'Boron', weight: 10.811, tipoOcorrencia: 'Boat', symbol: 'B', status: 'Resolvido'},
  {codigo: 6, name: 'Carbon', weight: 12.0107, tipoOcorrencia: 'Boat', symbol: 'C', status: 'Pendente'},
  {codigo: 7, name: 'Nitrogen', weight: 14.0067, tipoOcorrencia: 'Boat', symbol: 'N', status: ''},
  {codigo: 8, name: 'Oxygen', weight: 15.9994, tipoOcorrencia: 'Boat', symbol: 'O', status: ''},
  {codigo: 9, name: 'Fluorine', weight: 18.9984, tipoOcorrencia: 'Boat', symbol: 'F', status: ''},
  {codigo: 10, name: 'Neon', weight: 20.1797, tipoOcorrencia: 'Boat', symbol: 'Ne', status: ''},
  {codigo: 11, name: 'Sodium', weight: 22.9897, tipoOcorrencia: 'Boat', symbol: 'Na', status: ''},
  {codigo: 12, name: 'Magnesium', weight: 24.305, tipoOcorrencia: 'Boat', symbol: 'Mg', status: ''},
  {codigo: 13, name: 'Aluminum', weight: 26.9815, tipoOcorrencia: 'Boat', symbol: 'Al', status: ''},
  {codigo: 14, name: 'Silicon', weight: 28.0855, tipoOcorrencia: 'Boat', symbol: 'Si', status: ''},
  {codigo: 15, name: 'Phosphorus', weight: 30.9738, tipoOcorrencia: 'Boat', symbol: 'P', status: ''},
  {codigo: 16, name: 'Sulfur', weight: 32.065, tipoOcorrencia: 'Boat', symbol: 'S', status: ''},
  {codigo: 17, name: 'Chlorine', weight: 35.453, tipoOcorrencia: 'Boat', symbol: 'Cl', status: ''},
  {codigo: 18, name: 'Argon', weight: 39.948, tipoOcorrencia: 'Boat', symbol: 'Ar', status: ''},
  {codigo: 19, name: 'Potassium', weight: 39.0983, tipoOcorrencia: 'Boat', symbol: 'K', status: ''},
  {codigo: 20, name: 'Calcium', weight: 40.078, tipoOcorrencia: 'Boat', symbol: 'Ca', status: ''},
];

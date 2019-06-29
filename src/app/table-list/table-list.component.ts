import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'name', 'weight', 'symbol', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Boletins>(LISTA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Boletins {
  name: string;
  codigo: number;
  weight: number;
  symbol: string;
  status: string;
}

const LISTA: Boletins[] = [
  {codigo: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', status: ''},
  {codigo: 2, name: 'Helium', weight: 4.0026, symbol: 'He', status: ''},
  {codigo: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', status: ''},
  {codigo: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', status: 'Disponivel'},
  {codigo: 5, name: 'Boron', weight: 10.811, symbol: 'B', status: 'Resolvido'},
  {codigo: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', status: 'Pendente'},
  {codigo: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', status: ''},
  {codigo: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', status: ''},
  {codigo: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', status: ''},
  {codigo: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', status: ''},
  {codigo: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', status: ''},
  {codigo: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', status: ''},
  {codigo: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', status: ''},
  {codigo: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', status: ''},
  {codigo: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', status: ''},
  {codigo: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', status: ''},
  {codigo: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', status: ''},
  {codigo: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', status: ''},
  {codigo: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', status: ''},
  {codigo: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', status: ''},
];

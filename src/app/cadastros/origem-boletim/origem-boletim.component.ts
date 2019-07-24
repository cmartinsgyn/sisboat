import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrigemBo } from 'app/core/model/origemBo';

@Component({
  selector: 'app-origem-boletim',
  templateUrl: './origem-boletim.component.html',
  styleUrls: ['./origem-boletim.component.scss']
})
export class OrigemBoletimComponent {

  // origem = new OrigemBo();

  constructor() {

  }

  salvar() {
    console.log('Dados salvos!');
  }

}

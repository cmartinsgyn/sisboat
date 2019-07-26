import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrigemBo } from 'app/core/model/origemBo';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-origem-boletim',
  templateUrl: './origem-boletim.component.html',
  styleUrls: ['./origem-boletim.component.scss']
})
export class OrigemBoletimComponent implements OnInit {

  formulario: FormGroup;
  // origem = new OrigemBo();

  constructor(
    private fb: FormBuilder,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.criarFormulario();

  }

  salvar() {
    console.log(this.formulario.value);
    this.toastyService.success('Item cadastrado com sucesso!');
  }

  criarFormulario() {
    this.formulario = this.fb.group({
      nome: ['',
       Validators.compose([
         Validators.required,
         Validators.minLength(2),
         Validators.maxLength(100)
         ])
      ]

    });
  }
}

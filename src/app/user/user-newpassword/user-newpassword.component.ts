import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from 'app/core/password-validator';

@Component({
  selector: 'app-user-newpassword',
  templateUrl: './user-newpassword.component.html',
  styleUrls: ['./user-newpassword.component.scss']
})
export class UserNewpasswordComponent implements OnInit {
  hide = true;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.verificaSenhas()
  }

  private verificaSenhas() {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from 'app/core/password-validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
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

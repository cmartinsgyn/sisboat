import { ErrorStateMatcher } from '@angular/material';
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
    selector: 'app-cross-field-error-matcher'
})
export class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return control.dirty && form.invalid;
    }
}

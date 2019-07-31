import { Component, Input} from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() error: string;
    @Input() text: string;
    @Input() form: FormGroup

  constructor(
    private toastyConfig: ToastyConfig) {
      this.toastyConfig.theme = 'bootstrap';
      this.toastyConfig.position = 'bottom-left';
    }

  }

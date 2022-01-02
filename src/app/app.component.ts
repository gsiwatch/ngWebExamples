import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public firstNameFormControl: FormControl;
  public lastNameFormControl: FormControl;

  constructor() {
    this.firstNameFormControl = new FormControl();
    this.lastNameFormControl = new FormControl();
  }
}

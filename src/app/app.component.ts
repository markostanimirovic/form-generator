import { Component } from '@angular/core';
import { FormItem } from './f-generator/models/form-item.model';
import { FormGroup } from '@angular/forms';
import { Button } from './f-generator/models/button.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formItems: FormItem[];
  buttons: Button[];

  constructor() {
    this.formItems = [
      { name: 'ime', label: 'Ime', type: 'text' },
      { name: 'prezime', label: 'Prezime', type: 'text', value: 'Stanimirovic' },
      { name: 'godinaUpisa', label: 'Godina upisa', type: 'number' },
      { name: 'lozinka', label: 'Lozinka', type: 'password', value: 'Marko.123' },
    ];

    this.buttons = [
      { name: 'potvrdi', label: 'Potvrdi' },
      { name: 'odustani', label: 'Odustani' },
      { name: 'posalji', label: 'Posalji', style: 'warning'}
    ];
  }

  handleSubmit(form: object) {
    console.log(form);
  }

  handleClickedButton(clickedButton: { name: string, formValue: object }) {
    console.log(clickedButton);
  }
}

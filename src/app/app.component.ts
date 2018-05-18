import { Component } from '@angular/core';
import { FormItem } from './f-generator/form-item.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formItems: FormItem[];

  constructor() {
    this.formItems = [
      { name: 'Ime', type: 'text', value: 'Marko' },
      { name: 'Prezime', type: 'text', value: 'Stanimirovic' },
      { name: 'Godina upisa', type: 'number', value: 2014 },
    ];
  }

  onSubmitForm(form: FormGroup) {
    console.log(form);
  }
}

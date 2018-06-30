import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormItem } from './models/form-item.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Button } from './models/button.model';

@Component({
  selector: 'form-generator',
  templateUrl: './f-generator.component.html',
  styleUrls: ['./f-generator.component.css']
})
export class FGeneratorComponent implements OnInit {

  @Input() items: FormItem[];
  @Input() buttons: Button[];
  @Output() formValue = new EventEmitter<object>();
  @Output() clickedButton = new EventEmitter<{ name: string, formValue: object }>();
  form: FormGroup;
  formControls: { [key: string]: FormControl } = {};

  constructor() {}

  ngOnInit() {
    this.items.forEach((item) => {
      this.formControls[item.name] = new FormControl(item.value);
    });
    this.form = new FormGroup(this.formControls);
  }

  onSubmit() {
    this.formValue.emit(this.form.value);
  }

  onButtonClick(i: number, name: string) {
    if (i > 0) {
      this.clickedButton.emit({ name: name, formValue: this.form.value });
    }
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormItem } from './form-item.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-f-generator',
  templateUrl: './f-generator.component.html',
  styleUrls: ['./f-generator.component.css']
})
export class FGeneratorComponent implements OnInit {

  @Input() items: FormItem[];
  @Output() formValue = new EventEmitter<FormGroup>();
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
    this.formValue.emit(this.form);
  }

}

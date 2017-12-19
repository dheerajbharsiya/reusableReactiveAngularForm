import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DynamicFormComponent } from '../../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  public configData: FieldConfig[];
  constructor() {
    
  this.configData = 
  [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: []
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: []
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];
   }

  ngOnInit() {
  }
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;


  // ngAfterViewInit() {
  //   let previousValid = this.form.valid;
  //   this.form.changes.subscribe(() => {
  //     if (this.form.valid !== previousValid) {
  //       previousValid = this.form.valid;
  //       this.form.setDisabled('submit', !previousValid);
  //     }
  //   });

  //   this.form.setDisabled('submit', true);
  //   this.form.setValue('name', 'dheeraj');
  // }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

}

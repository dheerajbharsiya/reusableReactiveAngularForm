import { Output, Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DropdownValue } from '../dropdown-list/dropdown-values';
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  private formSumitted: boolean;
  public addressForm: FormGroup;
  @Input() formBtnName: string = "";
  @Input() formBtnClasses: string = "";
  @Input() formHeading: string = "";
  @Output() submitted: EventEmitter<string> = new EventEmitter();
  private dropdonwValues: DropdownValue = new DropdownValue('Country', [{
    value: 'India',
    lable: 'India'
  }, {
    value: 'USA',
    lable: 'USA'
  }]);
  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'street': new FormControl(null, Validators.required),
      'town': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'state': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
    });
  }

  public onFormSubmit(): void {
    if (this.addressForm.valid) {
      this.submitted.emit('Submit button clicked');
    } else {
      this.formSumitted = true;
    }
  }



}

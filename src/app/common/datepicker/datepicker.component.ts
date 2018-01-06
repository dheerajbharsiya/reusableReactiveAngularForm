import { Component, OnInit, Input} from '@angular/core';

import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { dateConfig } from './date-config';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [NgbDatepickerConfig] 
})
export class DatepickerComponent implements OnInit {
  public model;
  dateConfigs = dateConfig;
  @Input () formGroup: FormGroup;
  constructor(private config: NgbDatepickerConfig) { 
    config.minDate = this.dateConfigs.minDate;
    config.maxDate = this.dateConfigs.maxDate;

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = this.dateConfigs.markDisabled;

  }

  ngOnInit() {
  }

}

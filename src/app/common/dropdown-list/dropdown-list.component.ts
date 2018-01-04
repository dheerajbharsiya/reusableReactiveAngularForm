import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownValue } from './dropdown-values';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  @Input()
  values: DropdownValue;

  @Input() 
  fgroup: FormGroup;

  @Output() 
  select: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.select = new EventEmitter();
  }

  selectItem(value) {
    this.select.emit(value);
  }

  ngOnInit() {
  }

}

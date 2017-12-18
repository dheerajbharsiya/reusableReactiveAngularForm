import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-common',
  templateUrl: './btn-common.component.html',
  styleUrls: ['./btn-common.component.scss']
})
export class BtnCommonComponent implements OnInit {

  @Input("btnName") btnName: string = "";
  @Input("btnClasses") btnClasses: string = "";
  @Input("isDisabled") isDisabled: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

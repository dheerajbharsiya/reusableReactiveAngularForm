import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  private singleButtonName = "Standalone button";
  private singleButtonClass = "color-grey";
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  @Input() testVar: any = ""; 
  constructor() { }

  ngOnInit() {
    console.log("jit "+this.testVar);
  }

}

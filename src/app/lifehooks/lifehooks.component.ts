import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifehooks',
  templateUrl: './lifehooks.component.html',
  styleUrls: ['./lifehooks.component.scss']
})
export class LifehooksComponent implements OnInit {

  constructor() {
    console.log(`new constructor`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges`);
  }

  ngOnInit() {
    console.log(`ngOnInit `);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}

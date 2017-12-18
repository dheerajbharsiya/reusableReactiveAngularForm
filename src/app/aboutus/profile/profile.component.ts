import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileBtnName = "Profile Details";
  public profileBtnClasses = "my-profile";
  private profileHeading = "Profile Address Form"
  private submitted: boolean;
  constructor() { }

  ngOnInit() {
  }

  public profileSubmit(data) : void {
    console.log(data);
    this.submitted = true;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  private teamBtnName = "Team Details";
  private teamBtnClass = "myclass";
  private submitted: boolean;
  private teamHeading = "Team Address Form";
  private singleButtonName = "Standalone button";
  private singleButtonClass = "color-grey";
  constructor() { }

  ngOnInit() {
  }

  public teamSubmit() : void {
    this.submitted = true;
  }

}

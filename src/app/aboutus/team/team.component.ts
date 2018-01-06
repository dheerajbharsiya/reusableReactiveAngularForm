import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalCommonComponent } from '../../common/modal-common/modal-common.component';
import { ModalOpenerService } from '../../common/modal-common/modal-opener.service';


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
  constructor(private modalService: ModalOpenerService) { }

  ngOnInit() {
  }

  public teamSubmit(): void {
    this.submitted = true;
  }

  open() {
    this.modalService.openModal('teamModal');
  }

}

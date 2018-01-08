import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalCommonComponent } from '../../common/modal-common/modal-common.component';
import { ModalOpenerService } from '../../common/modal-common/modal-opener.service';
import { CustomerQuery } from '../../models/customer-query.model';
import { CustomerQueryService } from '../../common-services/customer-query.service';


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
  private queries: CustomerQuery[];

  constructor(private modalService: ModalOpenerService, private querySerivce: CustomerQueryService) { }

  ngOnInit() {
    this.queries = this.querySerivce.getCustomerQueryDetails();
  }

  public teamSubmit(): void {
    this.submitted = true;
  }

  open() {
    this.modalService.openModal('teamModal', this.queries);
  }

}

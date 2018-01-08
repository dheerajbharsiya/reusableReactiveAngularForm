import { Input, Component, OnInit } from '@angular/core';
import { ModalBinderService } from '../common-services/modal-binder.service';
import { ModalOpenerService } from '../common/modal-common/modal-opener.service';
import { DataManagerService } from '../common/modal-common/data-manager.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  private data: any = {};
  constructor(private dataManager: DataManagerService) { }

  ngOnInit() {
    this.data = this.dataManager.getModalData();
  }

  onClick() {
    console.log('customer info clicked');
  }

}

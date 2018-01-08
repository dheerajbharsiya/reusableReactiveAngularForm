
import { ViewContainerRef, ViewChild, Component, Input, ElementRef } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBinderService } from '../../common-services/modal-binder.service';
@Component({
  selector: 'app-modal-common',
  templateUrl: './modal-common.component.html'
})
export class ModalCommonComponent {
  @Input() name;
  @ViewChild('dynamic', {
    read: ViewContainerRef
  }) viewContainerRef: ViewContainerRef
  public data: any;
  
  ngOnInit() {
    console.log(this.data);
    this.modalBinder.setRootViewContainerRef(this.viewContainerRef)
    this.modalBinder.addDynamicComponent(this.data)
  }
  
  constructor(public activeModal: NgbActiveModal, private modalBinder: ModalBinderService) {
  }


}
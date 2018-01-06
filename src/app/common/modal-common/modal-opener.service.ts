import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap/modal/modal";
import { ModalCommonComponent } from "./modal-common.component";
import { ModalBinderService } from "../../common-services/modal-binder.service";

@Injectable()
export class ModalOpenerService {
    constructor(private modalService: NgbModal) {}
    openModal(modalName:string): void {
        const modalRef = this.modalService.open(ModalCommonComponent);
      //  modalRef.componentInstance.name = 'World';
    }
}
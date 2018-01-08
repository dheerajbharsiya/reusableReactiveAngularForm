import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap/modal/modal";
import { ModalCommonComponent } from "./modal-common.component";
import { ModalBinderService } from "../../common-services/modal-binder.service";
import { DataManagerService } from "./data-manager.service";

@Injectable()
export class ModalOpenerService {
    constructor(private modalService: NgbModal, private modalBinder: ModalBinderService, private dataManager: DataManagerService) { }
    public modalData: {};
    openModal(modalName: string, data: {}): void {
        this.dataManager.setModalData(data[0]);
        this.modalBinder.setModalName(modalName);
        const modalRef = this.modalService.open(ModalCommonComponent, {
            size: 'lg'
        });
       // modalRef.componentInstance.data = data;
    }

}
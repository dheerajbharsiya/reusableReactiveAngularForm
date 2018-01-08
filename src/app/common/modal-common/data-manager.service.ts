import { Injectable } from "@angular/core";

@Injectable()
export class DataManagerService {

    public modalData: any;
    constructor() { }

    setModalData(modalData: {}) {
        this.modalData = modalData;
    }

    getModalData() {
        return this.modalData;
    }
}
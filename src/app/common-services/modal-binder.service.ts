import { ComponentFactoryResolver, Injectable } from "@angular/core";
import { CustomerDetailComponent } from "../customer-detail/customer-detail.component";
import { ModalCommonComponent } from "../common/modal-common/modal-common.component";
@Injectable()
export class ModalBinderService {
    private rootViewContainer: any;
    constructor(private factoryResolver: ComponentFactoryResolver) { };
    public currentModalCompName: string = '';
    private modalComponents: any = [
        { 'teamModal': CustomerDetailComponent }
    ];
    dynamicComponent: any;
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef
    }

    addDynamicComponent(data: any) {
        const factory = this.factoryResolver.resolveComponentFactory(this.getModalComponent());
       // this.getModalComponent().componentInstance.modalComponentData = data;
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }

    setModalName(modalName: string) {
        this.currentModalCompName = modalName;
    }

    getModalComponent(): any {

        for (let element of this.modalComponents) {
            if (element[this.currentModalCompName]) {
                this.dynamicComponent = element[this.currentModalCompName];
                break;
            }
        }
        return this.dynamicComponent;
    }
    
}
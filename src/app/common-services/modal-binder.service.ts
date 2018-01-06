import { ComponentFactoryResolver, Injectable } from "@angular/core";
import { CustomerDetailComponent } from "../customer-detail/customer-detail.component";

@Injectable()
export class ModalBinderService {
    rootViewContainer :any;
    constructor(private factoryResolver: ComponentFactoryResolver) { }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef
    }

    addDynamicComponent() {
        const factory = this.factoryResolver.resolveComponentFactory(CustomerDetailComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }
}
import { AuthService } from './core/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './aboutus/profile/profile.component';
import { TeamComponent } from './aboutus/team/team.component';
import { ContactusComponent } from './aboutus/contactus/contactus.component';
import { BtnCommonComponent } from './common/btn-common/btn-common.component';
import { AddressFormComponent } from './common/address-form/address-form.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { DynamicForm1Module } from './dynamic-form1/dynamic-form1.module';
import { LifehooksComponent } from './lifehooks/lifehooks.component';
import { DropdownListComponent } from './common/dropdown-list/dropdown-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './common/datepicker/datepicker.component';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { ModalCommonComponent } from './common/modal-common/modal-common.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ModalOpenerService } from './common/modal-common/modal-opener.service';
import { ModalBinderService } from './common-services/modal-binder.service';
import { CustomerQueryService } from './common-services/customer-query.service';
import { DataManagerService } from './common/modal-common/data-manager.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    AboutusComponent,
    ProfileComponent,
    TeamComponent,
    ContactusComponent,
    BtnCommonComponent,
    AddressFormComponent,
    LifehooksComponent,
    DropdownListComponent,
    DatepickerComponent,
    ModalCommonComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    DynamicForm1Module,
    NgbModule.forRoot()
  ],
  providers: [AuthService, ModalOpenerService, ModalBinderService, CustomerQueryService, DataManagerService],
  bootstrap: [AppComponent],
  entryComponents: [ModalCommonComponent, CustomerDetailComponent]
})
export class AppModule { }

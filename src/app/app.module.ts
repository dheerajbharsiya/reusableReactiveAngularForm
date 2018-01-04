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
    DropdownListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    DynamicForm1Module
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

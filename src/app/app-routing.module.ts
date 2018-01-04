import { ContactusComponent } from './aboutus/contactus/contactus.component';
import { TeamComponent } from './aboutus/team/team.component';
import { ProfileComponent } from './aboutus/profile/profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: SigninComponent
    },
    {
        path: 'login', component: SigninComponent
    },
    {
        path: 'aboutus', component: AboutusComponent,
        children: [{
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
        },
        {
            path: 'profile',
            component: ProfileComponent
        },
        {
            path: 'team',
            component: TeamComponent
        },
        {
            path: 'contactus',
            component: ContactusComponent
        }
        ]
    },
    {
        path: '**', component: AboutusComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
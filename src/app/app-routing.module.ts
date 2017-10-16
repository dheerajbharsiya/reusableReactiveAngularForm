import { SigninComponent } from './auth/signin/signin.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { Routes, PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: SigninComponent
    },
    {
        path: 'aboutus', component: AboutusComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
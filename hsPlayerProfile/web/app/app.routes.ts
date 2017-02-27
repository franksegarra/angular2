import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

//Main menu
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
        {path: 'home', component: HomeComponent},
        {path: 'studentprofile/:id', component: StudentProfileComponent},
        {path: 'studentprofile', component: StudentProfileComponent},
        {path: 'about', component: AboutComponent},
        {path: '', redirectTo: 'studentprofile', pathMatch: 'full'},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const Routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);
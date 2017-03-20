import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

//Main menu
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';

const appRoutes: Routes = [

        {path: 'about', component: AboutComponent},
        {path: 'feedback', component: FeedbackComponent},
        {path: 'home', redirectTo: 'studentprofile/1', pathMatch: 'full'},
        {path: ':id', redirectTo: 'studentprofile/:id', pathMatch: 'full'},
        {path: 'studentprofile', redirectTo: 'studentprofile/1', pathMatch: 'full'},
        {path: 'studentprofile/:id', component: StudentProfileComponent},
        {path: '', redirectTo: 'studentprofile/1', pathMatch: 'full'},
        {path: '**', redirectTo: 'studentprofile/1', pathMatch: 'full'},
];

export const Routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);
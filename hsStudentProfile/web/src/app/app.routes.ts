import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

//Main menu
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPWComponent} from './auth/forgotpw/forgotpw.component';
import { ForgotUserNameComponent } from './auth/forgotusername/forgotusername.component';

const appRoutes: Routes = [

        {path: 'login', component: LoginComponent },
        {path: 'register', component: RegisterComponent },
        {path: 'forgotpw', component: ForgotPWComponent },
        {path: 'forgotusername', component: ForgotUserNameComponent },
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
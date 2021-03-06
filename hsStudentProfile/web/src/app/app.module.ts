import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';  

//Main Menu features
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPWComponent} from './auth/forgotpw/forgotpw.component';
import { ForgotUserNameComponent } from './auth/forgotusername/forgotusername.component';

//Modules
import { FeedbackModule } from './feedback/feedback.module';
import { StudentProfileModule } from './studentprofile/studentprofile.module';

//Authorization service
import { AuthService }  from './services/auth.service';
import { AlertService }  from './services/alert.service';
import { DataService } from './services/data.service';
import { DateService } from './services/date.service';
import { UserService }  from './services/user.service';
import { UrlHelperService }  from './services/urlhelper.service';

//routing setup
import { Routing } from "./app.routes";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPWComponent,
    ForgotUserNameComponent
  ],
  imports: [
    HttpModule,
    Routing,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FeedbackModule,
    StudentProfileModule,
    SelectButtonModule
  ],
  providers: [ AuthService, AlertService, DataService, DateService, UserService, UrlHelperService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

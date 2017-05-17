//External Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/primeng';

//Main Menu features
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPWComponent} from './auth/forgotpw/forgotpw.component';
import { ForgotUserNameComponent } from './auth/forgotusername/forgotusername.component';
import { StudentProfileModule } from './studentprofile/studentprofile.module';
import { FeedbackModule } from './feedback/feedback.module';

//routing setup
import { Routing } from "./app.routes";

//Main startup Component
import { AppComponent }  from './app.component';

//Authorization service
import { AuthService }  from './services/auth.service';
import { AlertService }  from './services/alert.service';
import { UserService }  from './services/user.service';
import { DateService }  from './services/date.service';

//Module declaration
@NgModule({
  imports: [ 
      HttpModule,
      Routing,
      CommonModule,
      BrowserModule,
      StudentProfileModule,
      FeedbackModule,
      BrowserAnimationsModule,
      FormsModule, 
      ReactiveFormsModule,
      SelectButtonModule
  ],
  declarations: [ 
      AppComponent
      ,AboutComponent
      ,HomeComponent
      ,WelcomeComponent
      ,LoginComponent
      ,RegisterComponent
      ,ForgotPWComponent
      ,ForgotUserNameComponent
  ],  
  providers: [ AuthService, AlertService, UserService, DateService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

//External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//routing setup
import { Routing } from "./app.routes";

//Main startup Component
import { AppComponent }  from './app.component';

//Main Menu features
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

//Student Profile
import { StudentProfileMenuComponent } from './studentprofile/studentprofilemenu.component';
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { StudentProfileModule } from './studentprofile/studentprofile.module';

//Module declaration
@NgModule({
  imports: [ 
      BrowserModule, 
      HttpModule,
      Routing,
      StudentProfileModule
  ],
  declarations: [ 
      AppComponent
      ,AboutComponent
      ,HomeComponent
      ,StudentProfileComponent
      ,StudentProfileMenuComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

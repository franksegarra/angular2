//External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//routing setup
import { Routing } from "./app.routes";

//Main startup Component
import { AppComponent }  from './app.component';

//Student Profile
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
      ,StudentProfileComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

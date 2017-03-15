//External Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Main Menu features
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome.component';

import { StudentProfileModule } from './studentprofile/studentprofile.module';
import { FeedbackModule } from './feedback/feedback.module';

//routing setup
import { Routing } from "./app.routes";

//Main startup Component
import { AppComponent }  from './app.component';

//Module declaration
@NgModule({
  imports: [ 
      HttpModule,
      Routing,
      StudentProfileModule,
      FeedbackModule,
  ],
  declarations: [ 
      AppComponent
      ,AboutComponent
      ,HomeComponent
      ,WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

//External Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/primeng';

//Google Maps
//import { AgmCoreModule } from 'angular2-google-maps/core';

//Data Services
import { DataService } from './services/data.service';

//routing setup
import { Routing } from "./app.routes";

//Main startup Component
import { AppComponent }  from './app.component';

//Main Menu features
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

//Student Profile Features
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { VideosComponent } from './studentprofile/videos/videos.component'
import { ProgressComponent } from './studentprofile/videos/progress.component';
import { ToolbarComponent } from './studentprofile/videos/toolbar.component';
import { OptionsComponent } from './studentprofile/videos/options.component';
import { VideoService } from './studentprofile/videos/video.service';
import { TreeViewComponent } from './studentprofile/videos/treeview.component';

import { PicturesComponent } from './studentprofile/pictures/pictures.component'
import { AcademicsComponent } from './studentprofile/academics/academics.component'
import { GradeComponent } from './studentprofile/academics/grade.component';
import { TestScoresComponent } from './studentprofile/academics/testscores.component';
import { ScheduleComponent } from './studentprofile/schedule/schedule.component'
import { LinksComponent } from './studentprofile/links/links.component'
import { ProfileComponent } from './studentprofile/profile/profile.component'
import { ContactMeComponent } from './studentprofile/contactme/contactme.component'

//Grade Filter
import { GradeFilterPipe } from './studentprofile/academics/grade-filter.pipe';
import { TimeDisplayPipe } from "./studentprofile/videos//timedisplay.pipe";

//Module declaration
@NgModule({
  imports: [ 
      BrowserModule, 
      HttpModule,
      Routing,
      FormsModule, 
      ReactiveFormsModule,
      AccordionModule
  ],
  declarations: [ 
      AppComponent
      ,AboutComponent
      ,HomeComponent
      ,StudentProfileComponent
      ,VideosComponent
      ,ProgressComponent
      ,ToolbarComponent
      ,OptionsComponent
      ,TreeViewComponent
      ,TimeDisplayPipe
      ,PicturesComponent
      ,AcademicsComponent
      ,GradeComponent
      ,GradeFilterPipe
      ,TestScoresComponent
      ,ScheduleComponent
      ,LinksComponent
      ,ProfileComponent
      ,ContactMeComponent
  ],
  providers: [ DataService, VideoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

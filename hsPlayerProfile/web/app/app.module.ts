//External Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, TreeModule, TreeNode } from 'primeng/primeng';

//Data Services
import { DataService } from './services/data.service';

//routing setup
import { Routing } from "./app.routes";

//Main startup Component
import { AppComponent }  from './app.component';

//Main Menu features
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

//Student Profile Component
import { StudentProfileComponent } from './studentprofile/studentprofile.component';

//Video components
import { VideosComponent } from './studentprofile/videos/videos.component'
import { VideoService } from './studentprofile/videos/video.service';
import { ProgressComponent } from './studentprofile/videos/progress.component';
import { ToolbarComponent } from './studentprofile/videos/toolbar.component';
import { OptionsComponent } from './studentprofile/videos/options.component';
import { TimeDisplayPipe } from "./studentprofile/videos//timedisplay.pipe";

//Picture components
import { PicturesComponent } from './studentprofile/pictures/pictures.component'
import { PictureService } from './studentprofile/pictures/picture.service';

//Academic components
import { AcademicsComponent } from './studentprofile/academics/academics.component'
import { GradeComponent } from './studentprofile/academics/grade.component';
import { TestScoresComponent } from './studentprofile/academics/testscores.component';
import { GradeFilterPipe } from './studentprofile/academics/grade-filter.pipe';

import { ScheduleComponent } from './studentprofile/schedule/schedule.component'
import { TimeFormatPipe } from './pipes/timeFormat.pipe';

import { LinksComponent } from './studentprofile/links/links.component'
import { ProfileComponent } from './studentprofile/profile/profile.component'

import { ContactMeComponent } from './studentprofile/contactme/contactme.component'
import { PhoneFormatPipe } from './pipes/phoneFormat.pipe'

//Grade Filter

//Module declaration
@NgModule({
  imports: [ 
      BrowserModule, 
      HttpModule,
      Routing,
      FormsModule, 
      ReactiveFormsModule,
      AccordionModule,
      TreeModule
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
      ,TimeDisplayPipe
      ,PicturesComponent
      ,AcademicsComponent
      ,GradeComponent
      ,GradeFilterPipe
      ,TestScoresComponent
      ,ScheduleComponent
      ,TimeFormatPipe
      ,LinksComponent
      ,ProfileComponent
      ,ContactMeComponent
      ,PhoneFormatPipe
  ],
  providers: [ DataService, VideoService, PictureService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

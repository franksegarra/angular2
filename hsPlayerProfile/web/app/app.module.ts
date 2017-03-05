//External Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, TreeModule, TreeNode, TooltipModule, PanelModule } from 'primeng/primeng';

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

//Student Profile - Academics
import { AcademicsComponent } from './studentprofile/academics/academics.component'
import { GradeComponent } from './studentprofile/academics/grade.component';
import { TestScoresComponent } from './studentprofile/academics/testscores.component';
import { GradeFilterPipe } from './studentprofile/academics/grade-filter.pipe';
import { ExtraCurricularComponent } from './studentprofile/academics/extracurricular.component';

//Student Profile - Video
import { VideosComponent } from './studentprofile/videos/videos.component'
import { VideoService } from './studentprofile/videos/video.service';
import { ProgressComponent } from './studentprofile/videos/progress.component';
import { ToolbarComponent } from './studentprofile/videos/toolbar.component';
import { OptionsComponent } from './studentprofile/videos/options.component';
import { TimeDisplayPipe } from "./studentprofile/videos//timedisplay.pipe";

//Student Profile - Pictures
import { PicturesComponent } from './studentprofile/pictures/pictures.component'
import { PictureService } from './studentprofile/pictures/picture.service';

//Schedule
import { ScheduleComponent } from './studentprofile/schedule/schedule.component'

//Links
import { LinksComponent } from './studentprofile/links/links.component'

//Stats
import { StatsService } from './studentprofile/stats/stats.service'
import { PhysicalComponent } from './studentprofile/stats/physical.component'
import { StatsComponent } from './studentprofile/stats/stats.component'
import { StatCategory } from './studentprofile/stats/statcategory.component'

//Contact ME
import { ContactMeComponent } from './studentprofile/contactme/contactme.component'

//Pipes
import { TBDFormatPipe } from './pipes/tbdFormat.pipe';
import { PhoneFormatPipe } from './pipes/phoneFormat.pipe'

//Module declaration
@NgModule({
  imports: [ 
      CommonModule,
      BrowserModule, 
      HttpModule,
      Routing,
      FormsModule, 
      ReactiveFormsModule,
      AccordionModule,
      TreeModule,
      TooltipModule,
      PanelModule
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
      ,ExtraCurricularComponent
      ,ScheduleComponent
      ,TBDFormatPipe
      ,LinksComponent
      ,StatsComponent
      ,PhysicalComponent
      ,StatCategory
      ,ContactMeComponent
      ,PhoneFormatPipe
  ],
  providers: [ DataService, VideoService, PictureService, StatsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

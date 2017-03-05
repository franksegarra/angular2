import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, TreeModule, TreeNode, TooltipModule, PanelModule } from 'primeng/primeng';

//Services
import { DataService } from '../services/data.service';
import { VideoService } from '../studentprofile/videos/video.service';
import { PictureService } from '../studentprofile/pictures/picture.service';
import { StatsService } from '../studentprofile/stats/stats.service';

//Main component for this module
import { StudentProfileComponent } from './studentprofile.component';

//Student Profile - Academics
import { AcademicsComponent } from './academics/academics.component';
import { GradeComponent } from './academics/grade.component';
import { TestScoresComponent } from './academics/testscores.component';
import { GradeFilterPipe } from './academics/grade-filter.pipe';
import { ExtraCurricularComponent } from './academics/extracurricular.component';

//Student Profile - Video
import { VideosComponent } from './videos/videos.component';
import { ProgressComponent } from './videos/progress.component';
import { ToolbarComponent } from './videos/toolbar.component';
import { OptionsComponent } from './videos/options.component';
import { TimeDisplayPipe } from "./videos//timedisplay.pipe";

//Student Profile - Pictures
import { PicturesComponent } from './pictures/pictures.component';

//Schedule
import { ScheduleComponent } from './schedule/schedule.component';

//Stats
import { PhysicalComponent } from './stats/physical.component';
import { StatsComponent } from './stats/stats.component';
import { StatCategory } from './stats/statcategory.component';

//Links
import { LinksComponent } from './links/links.component';

//Contact ME
import { ContactMeComponent } from './contactme/contactme.component';

//Pipes
import { TBDFormatPipe } from '../pipes/tbdFormat.pipe';
import { PhoneFormatPipe } from '../pipes/phoneFormat.pipe';

//Module declaration
@NgModule({
  imports: [
      CommonModule,
      BrowserModule, 
      FormsModule, 
      ReactiveFormsModule,
      AccordionModule,
      TreeModule,
      TooltipModule,
      PanelModule,
  ],
  declarations: [
      StudentProfileComponent
      ,AcademicsComponent
      ,GradeComponent
      ,GradeFilterPipe
      ,TestScoresComponent
      ,ExtraCurricularComponent
      ,VideosComponent
      ,ProgressComponent
      ,ToolbarComponent
      ,OptionsComponent
      ,TimeDisplayPipe
      ,PicturesComponent
      ,ScheduleComponent
      ,TBDFormatPipe
      ,StatsComponent
      ,PhysicalComponent
      ,StatCategory
      ,LinksComponent
      ,ContactMeComponent
      ,PhoneFormatPipe
  ],  
  providers: [ DataService, VideoService, PictureService, StatsService ],
})
export class StudentProfileModule { }  

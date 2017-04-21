import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule, TreeModule, TreeNode, TooltipModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService, OverlayPanelModule, CalendarModule, MultiSelectModule } from 'primeng/primeng';
import { MessageFormModule } from '../shared/messageform/messageform.module';

import { PopupModule } from 'ng2-opd-popup';

//Services
import { DataService } from '../services/data.service';
import { VideoService } from './videos/video.service';
import { PictureService } from './pictures/picture.service';
import { spDataService } from './services/spdata.service';
import { spUtilityService } from './services/sputility.service';

//Shared Components
import { SpHeaderComponent } from './spshared/spheader.component';
import { EditButtonsComponent } from './spshared/spEditButtons.component';
import { AddButtonComponent } from './spshared/spAddButton.component';

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
import { CoachesComponent } from './stats/coaches.component';

//Links
import { LinksComponent } from './links/links.component';

//Contact ME
import { ContactMeComponent } from './contactme/contactme.component';

//Pipes
import { TBDFormatPipe } from '../pipes/tbdFormat.pipe';
import { PhoneFormatPipe } from '../pipes/phoneFormat.pipe';
import { UpcomingDatesPipe } from '../pipes/upcomingdates.pipe';
import { DateFormatPipe } from '../pipes/dateFormat.pipe';
import { DOWFormatPipe } from '../pipes/dowFormat.pipe';


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
      MessageFormModule,
      ConfirmDialogModule,
      OverlayPanelModule,
      PopupModule,
      CalendarModule,
      DropdownModule,
      MultiSelectModule
  ],
  declarations: [
      StudentProfileComponent
      ,SpHeaderComponent
      ,EditButtonsComponent
      ,AddButtonComponent
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
      ,CoachesComponent
      ,LinksComponent
      ,ContactMeComponent
      ,PhoneFormatPipe
      ,UpcomingDatesPipe
      ,DateFormatPipe
      ,DOWFormatPipe
  ],  
  providers: [ 
      DataService, 
      VideoService, 
      PictureService, 
      spDataService, 
      ConfirmationService,
      spUtilityService
  ],
  exports: [ StudentProfileComponent ]
})
export class StudentProfileModule { }  

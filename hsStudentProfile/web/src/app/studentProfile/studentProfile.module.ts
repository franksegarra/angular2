import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Primeng
import { AccordionModule, TreeModule, TreeNode, TooltipModule, PanelModule, DropdownModule, SelectButtonModule } from 'primeng/primeng';
import { OverlayPanelModule, CalendarModule, MultiSelectModule, SpinnerModule, InputTextareaModule } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService, DialogModule } from 'primeng/primeng';
import { FileSelectDirective } from 'ng2-file-upload';

import { MessageFormModule } from '../shared/messageform/messageform.module';
import { ImageModule } from '../shared/image/image.module';

//Services
import { DataService } from '../services/data.service';
import { spDataService } from './services/spdata.service';

//Shared Components
import { SpHeaderComponent } from './spshared/spheader.component';
import { EditButtonsComponent } from './spshared/spEditButtons.component';

//Main component for this module
import { StudentProfileComponent } from './studentprofile.component';

//Student Profile - Academics
import { AcademicsComponent } from './academics/academics.component';
import { GradeComponent } from './academics/grade.component';
import { ProfileComponent } from './academics/profile.component';
import { GradeFilterPipe } from './academics/grade-filter.pipe';
import { ExtraCurricularComponent } from './academics/extracurricular.component';

//Student Profile - Video
import { VideosComponent } from './videos/videos.component';
import { ProgressComponent } from './videos/progress.component';
import { ToolbarComponent } from './videos/toolbar.component';
import { OptionsComponent } from './videos/options.component';
import { TimeDisplayPipe } from "./videos//timedisplay.pipe";
import { VideoService } from './videos/video.service';

//Student Profile - Pictures
import { PictureUpload } from '../shared/pictureupload/pictureupload.component';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './pictures/picture.service';

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
      CalendarModule,
      DropdownModule,
      MultiSelectModule,
      SelectButtonModule,
      SpinnerModule,
      InputTextareaModule,
      DialogModule,
      ImageModule
  ],
  declarations: [
      StudentProfileComponent
      ,SpHeaderComponent
      ,EditButtonsComponent
      ,AcademicsComponent
      ,GradeComponent
      ,GradeFilterPipe
      ,ProfileComponent
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
      ,FileSelectDirective
      ,PictureUpload
  ],  
  providers: [ 
      DataService, 
      VideoService, 
      PictureService, 
      spDataService, 
      ConfirmationService,
  ],
  exports: [ StudentProfileComponent, PictureUpload, FileSelectDirective ]
})
export class StudentProfileModule { }  

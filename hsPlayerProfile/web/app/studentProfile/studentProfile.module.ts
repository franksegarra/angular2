//Angular Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//routing setup
import { Routing } from "../app.routes";

//Feature components and objects
import { ContactMeComponent } from './contactme/contactme.component'

//Feature Modules
import { AcademicsModule } from '../academics/academics.module'
import { LinksModule } from '../links/links.module'
import { ScheduleModule } from '../schedule/schedule.module'
import { MyProfileModule } from '../profile/myprofile.module'


//Module declaration
@NgModule({
  imports: [ 
      Routing,
      SharedModule,
      FormsModule, 
      ReactiveFormsModule,
      AcademicsModule,
      LinksModule,
      ScheduleModule,
      MyProfileModule
  ],
  declarations: [ ContactMeComponent ]
})
export class StudentProfileModule { }
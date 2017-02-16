import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

//routing setup
import { Routing } from "../app.routes";

//Feature components
import { AcademicsModule } from '../academics/academics.module'
import { LinksModule } from '../links/links.module'
import { ContactMeModule } from '../contactme/contactme.module'
import { ScheduleModule } from '../schedule/schedule.module'
import { MyProfileModule } from '../profile/myprofile.module'

//Module declaration
@NgModule({
  imports: [ 
      Routing,
      AcademicsModule,
      LinksModule,
      ContactMeModule,
      ScheduleModule,
      MyProfileModule
  ],
  declarations: [ ]
})
export class StudentProfileModule { }
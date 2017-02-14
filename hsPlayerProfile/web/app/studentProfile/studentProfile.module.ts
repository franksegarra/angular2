import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

//Feature components and objects
import { StudentProfileComponent } from './studentprofile.component'

//Application components and objects
// import { AcademicsModule } from '../academics/academics.module'
// import { AcademicsComponent } from '../academics/academics.component'
// import { LinksModule } from '../links/links.module'
// import { ContactMeModule } from '../contactme/contactme.module'
// import { ScheduleModule } from '../schedule/schedule.module'
// import { MyProfileModule } from '../profile/myprofile.module'

//Module declaration
@NgModule({
  imports: [ 
      RouterModule.forRoot([{path: 'studentprofile', component: StudentProfileComponent}])
    //   AcademicsModule,
    //   LinksModule,
    //   ContactMeModule,
    //   ScheduleModule,
    //   MyProfileModule
  ],
  declarations: [ StudentProfileComponent ]
})
export class StudentProfileModule { }
//External Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

//Google Maps
//import { AgmCoreModule } from 'angular2-google-maps/core';

//Feature components and objects
import { ScheduleComponent } from './schedule.component'

//Module declaration
@NgModule({
  imports: [ 
    SharedModule,
      RouterModule.forChild([{path: 'schedule', component: ScheduleComponent}])
      //,AgmCoreModule.forRoot({apiKey: 'AIzaSyDVPxsV9KbsjSv-W-gV1khDZNnc3csLTVs' })
    ],
  declarations: [ ScheduleComponent ],
})
export class ScheduleModule { }

import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { AcademicsComponent } from './academics/academics.component'
import { LinksComponent } from './links/links.component'
import { ContactMeComponent } from './contactme/contactme.component'
import { ScheduleComponent } from './schedule/schedule.component'
import { MyProfileComponent } from './profile/myprofile.component'

const appRoutes: Routes  = [
          {path: 'welcome', component: StudentProfileComponent},

          {path: 'academics', component: AcademicsComponent},
          {path: 'links', component: LinksComponent},
          {path: 'contactme', component: ContactMeComponent},
          {path: 'schedule', component: ScheduleComponent},
          {path: 'profile', component: MyProfileComponent},
          {path: '', redirectTo: 'welcome', pathMatch: 'full'},
          {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

export const Routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);
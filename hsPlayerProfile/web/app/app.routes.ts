import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

//Main menu
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { AboutComponent } from './about/about.component';

//Student Profile menu compenents
import { AcademicsComponent } from './academics/academics.component'
import { LinksComponent } from './links/links.component'
import { ContactMeComponent } from './contactme/contactme.component'
import { ScheduleComponent } from './schedule/schedule.component'
import { MyProfileComponent } from './profile/myprofile.component'

const appRoutes: Routes = [
        {path: 'home', component: HomeComponent},
        {
                path: 'studentprofile', 
                component: StudentProfileComponent
                ,children: [
                        {path: '', component: AcademicsComponent },
                        {path: 'academics', component: AcademicsComponent},
                        {path: 'links', component: LinksComponent},
                        {path: 'contactme', component: ContactMeComponent},
                        {path: 'schedule', component: ScheduleComponent},
                        {path: 'profile', component: MyProfileComponent}
                ]
        },
        {path: 'about', component: AboutComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const Routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);
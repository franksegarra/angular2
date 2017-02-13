//External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Main startup Component
import { AppComponent }  from './app.component';

//To Remove
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module'

//Application components and objects
import { AcademicsModule } from './academics/academics.module'
import { LinksModule } from './links/links.module'
import { ContactMeModule } from './contactme/contactme.module'
import { ScheduleModule } from './schedule/schedule.module'
import { MyProfileModule } from './profile/myprofile.module'

//Module declaration
@NgModule({
  imports: [ 
      BrowserModule, 
      HttpModule,
      RouterModule.forRoot([
          {path: 'welcome', component: WelcomeComponent},
          {path: '', redirectTo: 'welcome', pathMatch: 'full'},
          {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ]),
      ProductModule,
      AcademicsModule,
      LinksModule,
      ContactMeModule,
      ScheduleModule,
      MyProfileModule
  ],
  declarations: [ 
      AppComponent,
      WelcomeComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

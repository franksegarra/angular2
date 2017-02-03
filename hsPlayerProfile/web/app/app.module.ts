//External Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Main startup Component
import { AppComponent }  from './app.component';

//Application components and objects
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module'
import { LinksModule } from './links/links.module'

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
      LinksModule
  ],
  declarations: [ 
      AppComponent,
      WelcomeComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

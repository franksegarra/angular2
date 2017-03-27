import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import our dependencies
import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';

import { DealService } from './deal.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // Include the routing module
    routing,
    HttpModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    // Include our array of routing components. This saves us from having to type out the entire list of components twice
    routedComponents
  ],
  providers: [
    // Add our deal service we created earlier
    DealService,
    AUTH_PROVIDERS,
    AuthService,
    AuthGuard
  ],
  // Declare our root component, which is the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
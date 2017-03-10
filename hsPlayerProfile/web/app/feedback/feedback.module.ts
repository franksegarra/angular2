import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule, CaptchaModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Main component for this module
import { FeedbackComponent } from './feedback.component';

//Messageform
import { MessageFormModule } from '../messageform/messageform.module';
import { MessageFormComponent } from '../messageform/messageform.component';

//Module declaration
@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      MessageFormModule,
  ],
  declarations: [
      FeedbackComponent,
      MessageFormComponent
    ]
})
export class FeedbackModule {}  

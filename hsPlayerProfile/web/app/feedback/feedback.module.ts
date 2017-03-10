import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Messageform
import { MessageFormModule } from '../shared/messageform/messageform.module';

//Main component for this module
import { FeedbackComponent } from './feedback.component';

//Module declaration
@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      MessageFormModule,
      FormsModule, 
      ReactiveFormsModule
  ],
  declarations: [
      FeedbackComponent,
    ],
  exports: [ FeedbackComponent ]
})
export class FeedbackModule {}  

import { NgModule } from '@angular/core';
import { DialogModule, CaptchaModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Main component for this module
import { MessageFormComponent } from './messageform.component';
import { MessageFormService } from './messageform.service';

//Module declaration
@NgModule({
  imports: [
    DialogModule, 
    CaptchaModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
      MessageFormComponent
  ],
  providers: [ MessageFormService ],
  exports: [ MessageFormComponent ]
})
export class MessageFormModule { }  

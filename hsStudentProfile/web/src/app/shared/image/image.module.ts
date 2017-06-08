import { NgModule } from '@angular/core';

//Main component for this module
import { ImageComponent } from './image.component';
import { SecurePipe } from '../../pipes/secure.pipe';

//Module declaration
@NgModule({
  imports: [ ],
  declarations: [ImageComponent, SecurePipe],
  exports: [ ImageComponent, SecurePipe ]
})
export class ImageModule { }  

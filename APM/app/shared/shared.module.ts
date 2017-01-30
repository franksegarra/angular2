//External Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Feature components and objects
import { StarComponent } from './star.component'

//Module declaration
@NgModule({
  imports: [ CommonModule ],
  declarations: [ StarComponent ],
  exports: [ CommonModule, FormsModule, StarComponent ]
})
export class SharedModule { }

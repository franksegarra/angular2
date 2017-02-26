//External Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Feature components and objects
import { MyProfileComponent } from './myprofile.component'

//Module declaration
@NgModule({
  imports: [ 
    SharedModule,
    RouterModule.forChild([{path: 'profile', component: MyProfileComponent}])
    ],
  declarations: [ MyProfileComponent ],
})
export class MyProfileModule { }

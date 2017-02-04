//External Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Feature components and objects
import { ContactMeComponent } from './contactme.component'

//Services
import { DataService } from '../services/data.service';

//Module declaration
@NgModule({
  imports: [ 
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild([{path: 'contactme', component: ContactMeComponent}])
    ],
  declarations: [ ContactMeComponent ],
  providers: [ DataService ]
})
export class ContactMeModule { }

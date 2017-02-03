//External Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

//Feature components and objects
import { LinksComponent } from './links.component'

//Services
import { DataService } from '../services/data.service';

//Module declaration
@NgModule({
  imports: [ 
    SharedModule,
      RouterModule.forChild([{path: 'links', component: LinksComponent}])
    ],
  declarations: [ LinksComponent ]
})
export class LinksModule { }

//External Modules
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

//Feature components and objects
import { AcademicsComponent } from './academics.component'

//Services
import { DataService } from '../services/data.service';

//Module declaration
@NgModule({
  imports: [ 
    SharedModule,
      RouterModule.forChild([{path: 'academics', component: AcademicsComponent}])
    ],
  declarations: [ AcademicsComponent ],
  providers: [ DataService ]
})
export class AcademicsModule { }

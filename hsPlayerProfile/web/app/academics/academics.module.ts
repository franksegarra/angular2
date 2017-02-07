//External Modules
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

//Feature components and objects
import { AcademicsComponent } from './academics.component'
import { GradeComponent } from './grade.component';

//Services
import { DataService } from '../services/data.service';

//Grade Filter
import { GradeFilterPipe } from './grade-filter.pipe';


//Module declaration
@NgModule({
  imports: [ 
    SharedModule,
      RouterModule.forChild([{path: 'academics', component: AcademicsComponent}])
    ],
  declarations: [ AcademicsComponent, GradeComponent, GradeFilterPipe ],
  providers: [ DataService ]
})
export class AcademicsModule { }

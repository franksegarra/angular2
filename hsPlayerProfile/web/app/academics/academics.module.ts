//External Modules
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'
import { AccordionModule } from 'primeng/primeng';

//Feature components and objects
import { AcademicsComponent } from './academics.component'
import { GradeComponent } from './grade.component';
import { TestScoresComponent } from './testscores.component';

//Grade Filter
import { GradeFilterPipe } from './grade-filter.pipe';

//Module declaration
@NgModule({
  imports: [ 
    SharedModule,
    AccordionModule,
      RouterModule.forChild([{path: 'academics', component: AcademicsComponent}])
    ],
  declarations: [ AcademicsComponent, GradeComponent, GradeFilterPipe, TestScoresComponent ]
})
export class AcademicsModule { }

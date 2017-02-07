import { PipeTransform, Pipe } from '@angular/core';
import { IClass } from './class';

@Pipe({
    name: 'gradeFilter'
})
export class GradeFilterPipe implements PipeTransform {
    transform(value: IClass[], filterBy: number): IClass[] {

        filterBy = filterBy ? filterBy : null;

        return filterBy ? 
        value.filter((aClass: IClass) => aClass.grade == filterBy) : 
        value;
    }
}
import { PipeTransform, Pipe } from '@angular/core';
import { IClass } from './class';

@Pipe({
    name: 'gradeFilter'
})
export class GradeFilterPipe implements PipeTransform {

    transform(classes: IClass[], conditions: {[field:string]: any}): IClass[] {
        return classes.filter(aclass => { 
            for (let field in conditions) { 
                if (aclass[field] !== conditions[field]){
                    return false;
                }
            }
            return true;
        })
    }
}
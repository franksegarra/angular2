import { PipeTransform, Pipe } from '@angular/core';
import { IHittingStats } from '../../models/IHittingStats';

@Pipe({
    name: 'statcategoryfilter'
})
export class StatCategoryFilterPipe implements PipeTransform {

    transform(hitting: IHittingStats[], conditions: {[field:string]: any}): IHittingStats[] {
        return hitting.filter(ahit => { 
            for (let field in conditions) { 
                if (ahit[field] !== conditions[field]){
                    return false;
                }
            }
            return true;
        })
    }
}
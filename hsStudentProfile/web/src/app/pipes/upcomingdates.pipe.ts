import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'upcomingdates'
})
export class UpcomingDatesPipe implements PipeTransform {
    transform(list:Array<any>, field: string): Array<any> {
        var dt: Date = new Date();
        return list
                .filter(anItem => {
                    var sdt: Date = new Date(anItem[field]);
                    if (sdt >= dt) 
                    { return true; }
                    
                    return false;
                })
    }
}
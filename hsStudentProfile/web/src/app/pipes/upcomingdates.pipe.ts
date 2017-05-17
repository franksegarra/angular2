import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'upcomingdates'
})
export class UpcomingDatesPipe implements PipeTransform {
    transform(list:Array<any>, field: string): Array<any> {
        var dt: Date = this.getCurrentDate();

        console.log(dt);
        
        return list.filter(anItem => {
                    var sdt: Date = this.removeTimeFromDate(anItem[field]);
                    if (sdt >= dt) 
                    { return true; }
                    
                    return false;
                })
    }

    removeTimeFromDate(datetime: any):Date {
        let datestr = datetime.toString();
        let yr =  +datestr.substr(0,4);
        let mo = +datestr.substr(5,2);
        let dt = +datestr.substr(8,2);
        let newdatestr = yr + '-' + mo + '-' + dt + 'T00:00:00';
        console.log(newdatestr);
        return new Date(newdatestr);
    }

    getCurrentDate(): Date {
        let yr = (new Date()).getUTCFullYear();
        let mo = (new Date()).getUTCMonth() + 1; 
        let dt = (new Date()).getUTCDate();
        let newdatestr = yr + '-' + mo + '-' + dt + 'T00:00:00';

        console.log(newdatestr);

        return new Date(newdatestr);
    }


}
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'upcomingdates'
})
export class UpcomingDatesPipe implements PipeTransform {
    transform(list:Array<any>, field: string): Array<any> {
        var dt: Date = this.getCurrentDate();
        //console.log('Just got new date');
        
        return list.filter(anItem => {
                    var sdt: Date = this.removeTimeFromDate(anItem[field]);
                    //console.log(sdt);
                    
                    if (sdt >= dt) 
                    { return true; }
                    
                    return false;
                })
    }

    removeTimeFromDate(datetime: any):Date {
        //console.log("removeTimeFromDate");
        
        let datestr = datetime.toString();
        let yr =  +datestr.substr(0,4);
        let mo = +datestr.substr(5,2);
        let dt = +datestr.substr(8,2);
        let newdatestr = yr + '-' + this.padSingleDigit(mo) + '-' + this.padSingleDigit(dt) + 'T00:00:00';
        //console.log(newdatestr);
        let newdate = new Date(newdatestr);
        //console.log(newdate);
        return newdate;
    }

    getCurrentDate(): Date {
        let yr = (new Date()).getUTCFullYear();
        let mo = (new Date()).getUTCMonth() + 1; 
        let dt = (new Date()).getUTCDate();
        let newdatestr = yr + '-' + this.padSingleDigit(mo) + '-' + this.padSingleDigit(dt) + 'T00:00:00';
        //console.log(newdatestr);
        let newdate = new Date(newdatestr);
        //console.log(newdate);

        return newdate;
    }

    padSingleDigit(inputval:number):string {
        switch(inputval) { 
            case 1: { return '01';} 
            case 2: { return '02';} 
            case 3: { return '03';} 
            case 4: { return '04';} 
            case 5: { return '05';} 
            case 6: { return '06';} 
            case 7: { return '07';} 
            case 8: { return '08';} 
            case 9: { return '09';} 
            default: { return inputval.toString();} 
        } 
    }

}
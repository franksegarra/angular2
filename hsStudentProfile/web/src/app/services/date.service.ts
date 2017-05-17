import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Injectable()
export class DateService {
    private ampm: SelectItem[] = [];
    private hours: SelectItem[] = [];
    private minutes: SelectItem[] = [];

    getAMPM(): SelectItem[] {
        var temp = this.ampm;
        if (this.ampm.length == 0)
        {
            temp.push({label:' ', value:null});
            temp.push({label:'AM', value:'AM'});
            temp.push({label:'PM', value:'PM'});
        }
        return this.ampm;
    }    

    getHours(): SelectItem[] {
        var temp = this.hours;
        if (this.hours.length == 0)
        {
            temp.push({label:' ', value:null});
            for (var i=1; i<=12; i++)
            {
                temp.push({label: i.toString(), value:i});
            }
        }
        return this.hours;
    }    

    getMinutes(): SelectItem[] {
        var temp = this.minutes;
        if (this.minutes.length == 0)
        {
            temp.push({label:' ', value:null});
            for (var i=0; i<=60; i++)
            {
                temp.push({label: this.pad(i).toString(), value:this.pad(i).toString()});
            }
        }
        return this.minutes;
    }    

    pad(n: number ): string {
        return (n < 10) ? ("0" + n.toString()) : n.toString();
    }

    formatDateString(datetime: any):string {
        if (datetime==null) {
            console.log("Null value passed to formatDateString");
            return "";
        }

        let datestr = datetime.toString();
        let yr =  +datestr.substr(0,4);
        let mo = +datestr.substr(5,2);
        let dt = +datestr.substr(8,2);
        let newdatestr = mo + '/' + dt + '/' + yr;
        return newdatestr;
    }

    formatTimePart(time: string, part: string) : string {
        let cln = time.search(':');
        let spc = time.search(' ');

        if (part == 'hr')
            return time.substr(0, cln);
        else if (part == 'mn') {
            // console.log('|' + time.substr(cln + 1, spc - cln - 1) + '|' );
            return time.substr(cln + 1, spc - cln - 1);
        }
        else if  (part == 'ampm')
            return time.substr(spc + 1);
    }

    formatTimeString(hours: string, minutes: string, ampm: string):string {
        if (hours == '' || minutes == '' || ampm == '')
            return '';
        else
            return hours + ':' + minutes + ' ' + ampm;
    }

}

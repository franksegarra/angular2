import { PipeTransform, Pipe } from '@angular/core';

enum DOWString {
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
}

@Pipe({ name: 'dowFormat' })
export class DOWFormatPipe implements PipeTransform {

    transform(value: Date, args: string[]): string {
        if (!value) return null;

        let datestr = value.toString();
        let yr =  +datestr.substr(0,4);
        let mo = (+datestr.substr(5,2))-1;
        let dt = +datestr.substr(8,2);
        let dow = new Date(yr, mo, dt).getDay();
        return DOWString[dow];
    }
}
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {

    transform(value: Date, args: string[]): string {
        if (!value) return null;

        let datestr = value.toString();
        let yr =  +datestr.substr(0,4);
        let mo = +datestr.substr(5,2);
        let dt = +datestr.substr(8,2);

        return mo + '/' + dt + '/' + yr;
    }
}
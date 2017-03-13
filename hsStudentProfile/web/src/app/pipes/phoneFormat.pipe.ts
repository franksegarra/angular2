import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'phoneFormat' })
export class PhoneFormatPipe implements PipeTransform {
    transform(value: string, args: string[]): string {
        if (!value) return value;

        let ac = value.substr(0,3);
        let first3 = value.substr(3,3);
        let last4 = value.substr(6,4);
        return  '(' + ac + ') ' + first3 + '-' + last4;
    }
}
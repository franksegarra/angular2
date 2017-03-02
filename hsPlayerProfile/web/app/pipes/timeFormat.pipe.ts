import { PipeTransform, Pipe } from '@angular/core';
import { IScheduleItem } from '../../models/IScheduleItem';

@Pipe({ name: 'timeFormat' })
export class TimeFormatPipe implements PipeTransform {
    transform(value: string, args: string[]): string {
        if (value) return value;
        return 'TBD';
    }
}
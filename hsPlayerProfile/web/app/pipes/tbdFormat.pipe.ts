import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'tbdFormat' })
export class TBDFormatPipe implements PipeTransform {
    transform(value: any, args: string[]): string {
        if (value) return value;
        return 'TBD';
    }
}
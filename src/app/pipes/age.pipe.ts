import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'age'
})
export class AgePipe implements PipeTransform {
    // {{ '1991-11-18' | age:' ans' }}
    transform(value: any, ...args: any[]) {
        let currentDate = (new Date()).getTime();
        let birthDate = (new Date(value)).getTime();
        let timeDiff = currentDate - birthDate;
        let age = (new Date(timeDiff)).getFullYear() - 1970;

        let end = args[0] || '';

        return age + end;
    }
}

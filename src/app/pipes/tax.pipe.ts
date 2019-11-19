import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tax'
})
export class TaxPipe implements PipeTransform {
    // {{ 10 | tax:10 }}
    transform(value: any, ...args: any[]) {
        let tax = args[0] || 20;
        value = value * (1 + tax / 100);
        value = value.toFixed(2).replace('.', ',');

        return value + ' €';
    }
}

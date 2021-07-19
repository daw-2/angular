import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    let numberFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
    let tax = args[0] || 20;
    let valueWithTax = value * (1 + tax / 100);

    return numberFormat.format(valueWithTax);
  }

}

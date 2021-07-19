import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log('calcul from pipe');
    console.log(value, args);
    let currentDate = new Date().getTime();
    let birthDate = new Date(value).getTime();
    let diff = currentDate - birthDate;
    let age = new Date(diff).getFullYear() - 1970;
    let end = args[0] || '';

    return age + end;
  }

}

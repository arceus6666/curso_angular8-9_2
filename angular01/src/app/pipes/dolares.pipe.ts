import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolares'
})
export class DolaresPipe implements PipeTransform {

  transform(value: number): number {
    return value / 6.97;
  }

}

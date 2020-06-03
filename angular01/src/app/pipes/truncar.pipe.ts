import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(value: string, limite: string): string {
    const limit = parseInt(limite, 10);

    return value.length > limit ? `${value.substring(0, limit)}...` : value;
  }

}

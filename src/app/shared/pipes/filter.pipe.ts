import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../products/product.interface';

@Pipe({
  name: 'filterByAnyFieldPipe',
  standalone: true,
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(
    list: IProduct[] | null | undefined,
    sought: string | number,
  ): Array<IProduct> {
    const result = new Array<IProduct>();
    if (list) {
      for (const item of list) {
        for (const value of Object.values(item)) {
          if (
            (typeof value === 'string' &&
              typeof sought === 'string' &&
              value.includes(sought)) ||
            (typeof value === 'number' &&
              typeof sought === 'number' &&
              value === sought)
          )
            result.push(item);
        }
      }
    }
    return result;
  }
}

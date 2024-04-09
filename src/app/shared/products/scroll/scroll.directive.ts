import { Directive, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appScroll], appScroll',
  standalone: true,
})
export class ScrollDirective {
  // constructor() {
  //   this.productList = document.getElementById(
  //     'app-product-list',
  //   );
  // }

  productList: HTMLCollectionOf<Element> =
    document.getElementsByTagName('app-product-list');
  @HostListener('document:scroll' /*, ['$event']*/)
  onScroll() {
    // if (this.productList) {
    const scroll$ = fromEvent(document, 'scroll');
    scroll$.subscribe(() => {
      console.log('Scrolling detected!', this.productList);
      // Perform actions based on the scroll event
    });
  }
  // }
}

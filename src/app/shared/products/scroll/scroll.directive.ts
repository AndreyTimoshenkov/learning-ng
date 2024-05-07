import { Directive, HostListener } from '@angular/core';
// import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appScroll], appScroll',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'app-scroll-directive',
  },
})
export class ScrollDirective {
  // constructor() {
  //   this.productList = document.getElementsByTagName(
  //     'app-product-list',
  //   );
  //   console.log(this.productList);
  // }
  // productList;

  @HostListener('scroll', ['$event.target'])
  onScroll({
    scrollTop,
    clientHeight,
    scrollHeight,
  }: HTMLElement) {
    // onScroll(event: HTMLElement) {
    // const scroll$ = fromEvent(this.productList, 'scroll');
    // scroll$.subscribe((event) => {
    //   console.log(event.target.);
    // });
    // const scroll$ = fromEvent(target, 'scroll');
    // scroll$.subscribe((event) => console.log(event));
    console.log(scrollTop, clientHeight, scrollHeight);
  }
}

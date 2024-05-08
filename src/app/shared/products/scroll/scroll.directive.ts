import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
@Directive({
  selector: '[appScroll], appScroll',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'app-scroll-directive',
  },
})
export class ScrollDirective {
  private prevScrollTop = -1;

  @Output() notify: EventEmitter<TLoadDirection> = new EventEmitter<TLoadDirection>();

  @HostListener('scroll', ['$event.target'])
  onScroll({ scrollTop, clientHeight, scrollHeight }: HTMLElement) {
    const prevScrollTop = this.prevScrollTop;
    this.prevScrollTop = scrollTop;

    if (scrollHeight - clientHeight - scrollTop < borderOffset && scrollTop > prevScrollTop) {
      console.log('time to load more, descending');
      this.notify.emit('descending');
    } else if (scrollTop < borderOffset && scrollTop < prevScrollTop) {
      console.log('time to load more, ascending');
      this.notify.emit('ascending');
    }
  }
}

export const borderOffset = 100;
export type TLoadDirection = 'ascending' | 'descending';

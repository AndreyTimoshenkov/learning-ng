import {
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';
import { filter, fromEvent, map, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Directive({
  selector: '[appScroll], appScroll',
  standalone: true,
})
export class ScrollDirective {
  constructor(element: ElementRef, destroy: DestroyRef) {
    this.elem = element.nativeElement;
    this.destroy = destroy;
    this.prevScrollTop = 0;
  }
  private elem: HTMLElement;
  private destroy: DestroyRef;
  private prevScrollTop: number;

  @Output() notify: EventEmitter<TLoadDirection> = new EventEmitter<TLoadDirection>();
  @HostBinding('class.app-scroll-directive')
  @HostListener('scroll', ['$event.target'])
  // Exhibit 1
  // onScroll({ scrollTop, clientHeight, scrollHeight }: HTMLElement) {
  //   const prevScrollTop = this.prevScrollTop;
  //   this.prevScrollTop = scrollTop;

  //   if (scrollHeight - clientHeight - scrollTop < borderOffset && scrollTop > prevScrollTop) {
  //     this.notify.emit('descending');
  //   } else if (scrollTop < borderOffset && scrollTop < prevScrollTop) {
  //     this.notify.emit('ascending');
  //   }
  // }

  // Exhibit 2
  onScroll() {
    const scroll$ = fromEvent(this.elem, 'scroll').pipe(
      throttleTime(1000),
      map((event: Event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.target as HTMLElement;
        let prevScrollTop: number;

        [prevScrollTop, this.prevScrollTop] = [this.prevScrollTop, scrollTop];

        if (scrollTop < borderOffset && scrollTop < prevScrollTop) {
          return 'ascending';
        } else if (
          scrollHeight - scrollTop - clientHeight < borderOffset &&
          scrollTop > prevScrollTop
        ) {
          return 'descending';
        } else {
          return null;
        }
      }),
      filter((direction) => direction !== null),
    );
    scroll$
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((direction: TLoadDirection) => this.notify.emit(direction));
  }
}

export const borderOffset = 50;
export type TLoadDirection = 'ascending' | 'descending' | null;

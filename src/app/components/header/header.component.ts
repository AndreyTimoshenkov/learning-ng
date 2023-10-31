import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class HeaderComponent {
  readonly title = 'My Angular Learning App';
  readonly faviconSrc = '../../../favicon.ico';

  @Output() readonly MenuClick = new EventEmitter<Event>();

  // onMenuClickFromHeader(event: Event) {
  //   console.log('onMenuClickFromHeader')
  //   this.MenuClick.next(event)
  // }

  onFavClick(event: Event) {
    event.stopPropagation();
    console.log('onFavClick', event);
  }

  onShareClick(event: Event) {
    event.stopPropagation();
    console.log('onShareClick', event);
  }
}

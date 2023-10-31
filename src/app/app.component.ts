import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './pages/product-list/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    SidenavComponent,
    CardComponent,
  ],
})
export class AppComponent {
  title = 'learning-ng';

  isSideNavOpenedfromApp = false;

  onMenuClickFromApp() {
    // console.log('click from AppComponent', event)
    this.isSideNavOpenedfromApp =
      !this.isSideNavOpenedfromApp;
  }

  // onMenuClick(event: Event) {
  //   console.log('onMenuClick', event);
  //
  // }
}

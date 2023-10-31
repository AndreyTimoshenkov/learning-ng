import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  @Input() isSideNavOpened = false;

  @Output() isSideNavOpenedChange =
    new EventEmitter<boolean>();

  toggleSideNavOpened() {
    // this.isSideNavOpened = !this.isSideNavOpened;
    this.isSideNavOpenedChange.emit(!this.isSideNavOpened);
  }
}

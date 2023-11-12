import {
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDrawer,
  MatSidenavModule,
} from '@angular/material/sidenav';

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
export class SidenavComponent implements OnInit {
  ngOnInit(): void {
    this.insertNavigationTemplate();
  }

  // @Input() set navigationTemplate(template: TemplateRef<unknown>) {
  //   this.viewport?.clear();
  //   this.viewport?.createEmbeddedView(template);
  // }

  @ViewChild('matDrawer', { static: true })
  private readonly drawerComponent?: MatDrawer;

  @ViewChild('viewport', {
    static: true,
    read: ViewContainerRef,
  })
  private readonly viewport?: ViewContainerRef;

  @ContentChild('navigationTemplate', { static: true })
  private readonly navigationTemplate?: TemplateRef<unknown>;

  private insertNavigationTemplate() {
    if (this.navigationTemplate)
      this.viewport?.createEmbeddedView(
        this.navigationTemplate,
      );
  }

  toggleSideNavOpened() {
    this.drawerComponent?.toggle();
  }
}

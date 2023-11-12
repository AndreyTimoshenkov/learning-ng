import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-host',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
  @Input() set template(
    template: TemplateRef<unknown> | null,
  ) {
    this.updatePopupContent(template);
  }

  @ViewChild('viewport', {
    read: ViewContainerRef,
    static: true,
  })
  private readonly viewportViewContainer!: ViewContainerRef;

  private updatePopupContent(
    template: TemplateRef<unknown> | null,
  ) {
    this.viewportViewContainer.clear();
    if (template) {
      this.viewportViewContainer.createEmbeddedView(
        template,
      );
    }
  }
  get isViewportClear(): boolean {
    return !this.viewportViewContainer.length;
  }
}

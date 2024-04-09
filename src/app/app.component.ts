import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CardComponent } from './pages/product-list/card/card.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { MatListModule } from '@angular/material/list';
import { applicationConfigMock } from './shared/products/app-config/app-config.mock';
import { PopupHostComponent } from './components/popup-host/popup-host.component';
import { ScrollDirective } from './shared/products/scroll/scroll.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { productMock } from './shared/products/product.mock';
import { IProduct } from './shared/products/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    SidenavComponent,
    CardComponent,
    ProductListComponent,
    MatListModule,
    PopupHostComponent,
    ScrollDirective,
    MatProgressSpinnerModule,
  ],
})
export class AppComponent implements OnInit {
  productList: IProduct[] = [];
  showSpinner: boolean;

  ngOnInit(): void {
    setTimeout(() => {
      this.productList = productMock;
      this.showSpinner = false;
    }, 4000);
  }

  title = 'e-shop';
  readonly applicationConfig = applicationConfigMock;

  switchTemplate = false;
  closeTemplate = true;

  constructor() {
    // setTimeout(() => {
    //   this.switchTemplate = !this.switchTemplate;
    //   this.closeTemplate = !this.closeTemplate;
    // }, 3000);

    // setTimeout(() => {
    //   this.switchTemplate = !this.switchTemplate;
    //   this.closeTemplate = !this.closeTemplate;
    // }, 6000);

    // setTimeout(() => {
    //   this.switchTemplate = !this.switchTemplate;
    //   this.closeTemplate = !this.closeTemplate;
    // }, 9000);

    this.showSpinner = true;

    setTimeout(() => {
      this.productList = productMock;
      this.showSpinner = false;
    }, 4000);
  }
}

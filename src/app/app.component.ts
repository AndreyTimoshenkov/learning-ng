import { Component, OnChanges, OnInit } from '@angular/core';
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
import { FilterPipe } from './shared/pipes/filter.pipe';
import { CommonModule } from '@angular/common';

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
    FilterPipe,
    CommonModule,
  ],
})
export class AppComponent implements OnInit, OnChanges {
  productList: IProduct[] = [];
  showSpinner = false;
  title = 'e-shop';
  readonly applicationConfig = applicationConfigMock;

  constructor() {
    this.showSpinner = true;
    this.productList = productMock;
  }

  ngOnChanges(): void {
    // this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
  }

  spin(value: boolean) {
    this.showSpinner = value;
    setTimeout(() => (this.showSpinner = false), 500);
  }
}

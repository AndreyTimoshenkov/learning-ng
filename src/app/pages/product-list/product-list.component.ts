import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IProduct } from '../../shared/products/product.interface';
import { ScrollDirective, TLoadDirection } from 'src/app/shared/products/scroll/scroll.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, CardComponent, ScrollDirective],
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];
  @Output() spinner: EventEmitter<boolean> = new EventEmitter<boolean>();

  onProductBuy(id: IProduct['_id']) {
    console.log(id);
  }

  loadProducts(direction: TLoadDirection) {
    console.log(`loading more products in ${direction} direction from ProductListComp`);
    this.spinner.emit(true);
    // setTimeout(() => this.spinner.emit(false), 3000);
  }
}

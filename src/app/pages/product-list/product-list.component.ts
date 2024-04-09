import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
// import { productMock } from '../../shared/products/product.mock';
import { IProduct } from '../../shared/products/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, CardComponent],
})
export class ProductListComponent {
  // readonly products = productMock;
  @Input() products: IProduct[] = [];

  onProductBuy(id: IProduct['_id']) {
    console.log(id);
  }
}

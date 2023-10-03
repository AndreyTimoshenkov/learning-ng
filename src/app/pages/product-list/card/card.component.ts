import { Component } from '@angular/core';
import { IProduct } from '../product.interface';
import { productMock } from '../product.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  onBuyClick(event: Event) {
    event.stopPropagation();
    console.log('onBuyClick');
  }
  product: IProduct = productMock;
}

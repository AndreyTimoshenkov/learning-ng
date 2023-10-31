import { Component } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';
import { MatButtonModule } from '@angular/material/button';
import { CardImagesComponent } from './card-images/card-images.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    CardImagesComponent,
    MatButtonModule,
  ],
})
export class CardComponent {
  onBuyClick(event: Event) {
    event.stopPropagation();
    console.log('onBuyClick');
  }
  product: IProduct = productMock;
}

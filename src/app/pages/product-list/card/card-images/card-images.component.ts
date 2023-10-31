import { Component } from '@angular/core';
import { IProductImage } from '../../../../shared/products/product-image.interface';
import { productMock } from '../../../../shared/products/product.mock';
import { IProduct } from '../../../../shared/products/product.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.css'],
  standalone: true,
  imports: [MatIconModule],
})
export class CardImagesComponent {
  productImages: IProductImage[] = productMock.images;
  product: IProduct = productMock;
  index = 0;
  onButtonClick(delta: number) {
    const newIndex = delta + this.index;
    if (
      newIndex >= this.productImages.length ||
      newIndex < 0
    ) {
      return;
    }
    this.index += delta;
  }
}

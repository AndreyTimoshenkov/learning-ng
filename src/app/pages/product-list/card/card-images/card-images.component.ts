import { Component, Input } from '@angular/core';
import { IProductImage } from '../../../../shared/products/product-image.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.css'],
  standalone: true,
  imports: [MatIconModule, CommonModule],
})
export class CardImagesComponent {
  @Input() productImages: IProductImage[] | undefined;

  index: number;

  onButtonClick(delta: number) {
    const newIndex = delta + this.index;
    if (this.productImages == undefined) {
      return;
    }
    if (
      newIndex >= this.productImages.length ||
      newIndex < 0
    ) {
      return;
    }
    this.index += delta;
  }

  constructor() {
    this.index = 0;
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
// import { productMock } from '../../../shared/products/product.mock';
import { MatButtonModule } from '@angular/material/button';
import { CardImagesComponent } from './card-images/card-images.component';
import { MatCardModule } from '@angular/material/card';
import { IProductImage } from '../../../shared/products/product-image.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    CardImagesComponent,
    MatButtonModule,
    CommonModule,
  ],
})
export class CardComponent implements OnInit {
  @Input() product: IProduct | undefined;

  productImages: IProductImage[] | undefined;

  @Output() readonly buy = new EventEmitter<
    IProduct['_id']
  >();

  onProductBuy(event: Event) {
    event.stopPropagation();
    this.buy.emit(this.product!._id);
  }

  constructor() {
    // this.productImages = this.product?.images;
  }
  ngOnInit(): void {
    this.productImages = this.product?.images;
  }
}

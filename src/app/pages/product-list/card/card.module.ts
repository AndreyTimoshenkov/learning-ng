import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardImagesComponent } from './card-images/card-images.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardComponent, CardImagesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}

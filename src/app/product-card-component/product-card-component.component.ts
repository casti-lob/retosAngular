import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/Product';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-product-card-component',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './product-card-component.component.html'
})
export class ProductCardComponentComponent {
  @Input() productData!:Product
}

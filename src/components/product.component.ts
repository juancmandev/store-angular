import { Component } from '@angular/core';
import { Product } from '../app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  product: Product = {
    id: '1',
    image: '../assets/img/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'Lorem ipsum dolor sit amet.',
  };
}

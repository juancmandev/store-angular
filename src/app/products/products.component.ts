import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: '../assets/img/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: '2',
      image: '../assets/img/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: '3',
      image: '../assets/img/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: '4',
      image: '../assets/img/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: '5',
      image: '../assets/img/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: '6',
      image: '../assets/img/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet.',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}

import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store-angular';
  items = ['angular', 'react', 'vue', 'svelte'];
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
  addItem() {
    this.items.push('new item');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}

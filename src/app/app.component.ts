import { Component } from '@angular/core';

class Pizza {
  id: number;
  name: string;
  price: number;
  image?: string;
}

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ name }}</h2>
    <div>Id: {{ pizza.id }}</div>
    <div>Name: {{ pizza.name }}</div>
    <div>Price: {{ pizza.price }}</div>
    <img [src]="pizza.image">
    <input [(ngModel)]="pizza.name">
  `,
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Mon super site';
  name: string = '4 fromages';
  pizza: Pizza = {
    id: 1,
    name: 'Reine',
    price: 12,
    image: '/assets/img/reine.jpg'
  };
  // Liste de pizzas à afficher dans le composant
  pizzas: Pizza[] = PIZZAS;
}

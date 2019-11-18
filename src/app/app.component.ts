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
  templateUrl: './app.component.html',
  styles: [`
    li:hover {
      cursor: pointer;
    }
  `]
})
export class AppComponent {
  title = 'Mon super site';

  selectedPizza: Pizza;
  // Liste de pizzas à afficher dans le composant
  pizzas: Pizza[] = PIZZAS;

  // Quand on clique sur une pizza
  onSelect(pizza: Pizza) {
    console.log(pizza);
    this.selectedPizza = pizza;
  }
}

import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { User } from './models/user.model';
import { Ingredient } from './models/ingredient';

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: 'reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    li:hover {
      cursor: pointer;
    }
    .selected {
      font-weight: bold;
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'Mon super site';

  selectedPizza: Pizza;
  // Liste de pizzas à afficher dans le composant
  pizzas: Pizza[] = PIZZAS;

  user: User = new User('Mota', 'Matthieu', '1991-11-18', 'https://...');
  ingredients: Ingredient[] = [
    { name: 'Tomate', image: 'tomato.png', weight: 20, price: 0.50 },
    { name: 'Avocat', image: 'avocado.png', weight: 60, price: 1.50 }
  ];

  // Quand on clique sur une pizza
  onSelect(pizza: Pizza) {
    console.log(pizza);
    // Si une pizza est déjà sélectionnée, on reset
    if (this.selectedPizza) {
      this.selectedPizza.ingredient = null;
    }
    this.selectedPizza = pizza;
  }

  // Quand on reçoit l'événement de l'enfant
  unSelect(pizza: Pizza) {
    console.log(pizza);
    this.selectedPizza = this.selectedPizza.ingredient = null;
  }

  // Quand on choisit un ingredient dans le composant ingredient-list
  addIngredient(ingredient: Ingredient) {
    this.selectedPizza.ingredient = ingredient;
  }
}

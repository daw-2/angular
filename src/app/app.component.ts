import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { User } from './models/user.model';
import { Ingredient } from './models/ingredient';
import { PizzaService } from './services/pizza.service';
import { MessageService } from './services/message.service';

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
  pizzas: Pizza[];

  user: User = new User('Mota', 'Matthieu', '1991-11-18', 'https://...');
  ingredients: Ingredient[] = [
    { name: 'Tomate', image: 'tomato.png', weight: 20, price: 0.50 },
    { name: 'Avocat', image: 'avocado.png', weight: 60, price: 1.50 }
  ];

  sort = {
    field: 'name',
    order: 'asc'
  };

  constructor(
    private pizzaService: PizzaService,
    private messageService: MessageService
  ) { }

  // Hook appelé à l'initialisation du composant
  ngOnInit() {
    this.pizzaService.getPizzas().then(
      pizzas => this.pizzas = pizzas
    );
  }

  // Quand on clique sur une pizza
  onSelect(pizza: Pizza) {
    console.log(pizza);
    // Si une pizza est déjà sélectionnée, on reset
    if (this.selectedPizza) {
      this.selectedPizza.ingredient = null;
    }
    this.selectedPizza = pizza;

    this.messageService.addMessage(
      'Ajout de la pizza ' + this.selectedPizza.name
    );
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

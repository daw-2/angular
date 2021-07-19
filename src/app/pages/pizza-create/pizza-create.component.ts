import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent {
  pizza: any = {
    name: '',
    price: '',
  };
  errors: any;

  constructor(
    private pizzaService: PizzaService,
    private router: Router
  ) { }

  create() {
    this.pizzaService.createPizza(this.pizza).subscribe(
      pizza => this.router.navigate(['/pizzas']),
      response => this.errors = response.error.errors
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  pizza: Pizza = new Pizza();

  constructor(
    private pizzaService: PizzaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save() {
    this.pizzaService.create(this.pizza).then(
      () => this.router.navigate(['/pizzas'])
    );
  }

}

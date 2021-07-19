import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-selected',
  templateUrl: './pizza-selected.component.html',
  styleUrls: ['./pizza-selected.component.scss']
})
export class PizzaSelectedComponent implements OnInit {
  @Input('selected-pizza') selectedPizza: Pizza;
  edited: boolean = false;
  errors: any;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.errors = null;

    this.pizzaService.updatePizza(this.selectedPizza).subscribe(pizza => {
      this.edited = true;
      setTimeout(() => this.edited = false, 2000);
    }, response => this.errors = response.error.errors);
  }

  changePrice(): void {
    if (this.selectedPizza) {
      this.selectedPizza.price = 12;
    }
  }

}

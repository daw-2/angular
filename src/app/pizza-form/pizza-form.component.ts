import { Component } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../models/pizza.model';
import { ActivatedRoute } from '@angular/router'; 
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {
  pizza: Pizza = new Pizza();
  busy: boolean = false;
  ended: boolean = false;
  editing: boolean = false;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
        .pipe(
          map(params => +params.get('id')),
          switchMap(id => id
            ? this.pizzaService.getPizza(id)
            : of(new Pizza())
          )
        )
        .subscribe(pizza => {
          this.pizza = pizza;

          if (pizza.id) {
            this.editing = true;
          }
        });
  }

  save() {
    this.busy = true;

    this.pizzaService.createPizza(this.pizza).subscribe(
      () => setTimeout(() => this.ended = true, 250),
      error => setTimeout(() => this.busy = false, 250)
    );
  }

  update() {
    this.busy = true;

    this.pizzaService.updatePizza(this.pizza).subscribe(
      () => setTimeout(() => this.ended = true, 250),
      error => setTimeout(() => this.busy = false, 250)
    );
  }

}

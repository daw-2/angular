import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pizza-show',
  templateUrl: './pizza-show.component.html',
  styleUrls: ['./pizza-show.component.scss']
})
export class PizzaShowComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /* this.pizzaService.getPizza(+this.route.snapshot.params.id).then(
      pizza => this.pizza = pizza
    ); */

    /* this.route.params.subscribe(params => {
      this.pizzaService.getPizza(+params.id).then(p => this.pizza = p)
    }); */

    // import { switchMap } from 'rxjs/operators';
    this.route.params.pipe(
      switchMap(params => this.pizzaService.getPizza(+params.id)),
      catchError((error, observable) => {
        if (this.pizza) { // Vérifie si pizza précédente ou suivante
          this.router.navigate(['/pizza', this.pizza.id]);
          return observable;
        }

        return of(this.pizza);
      })
    ).subscribe(pizza => this.pizza = pizza);
  }

}

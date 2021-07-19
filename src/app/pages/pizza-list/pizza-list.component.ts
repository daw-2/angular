import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { Ingredient } from 'src/app/models/ingredient';
import { Pizza } from 'src/app/models/pizza';
import { IngredientService } from 'src/app/services/ingredient.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  selectedPizza: Pizza | undefined;
  pizzas: Pizza[];
  loader: boolean = false;
  ingredients: Ingredient[];
  sort: any = {
    field: 'name', order: 'asc'
  };
  @ViewChild('search') search: ElementRef;

  constructor(
    private pizzaService: PizzaService,
    private ingredientService: IngredientService
  ) { }

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(search => this.pizzaService.searchPizza(search))
      )
      .subscribe(pizzas => {
        /* let newPizzas: any[] = [];
        let o = from(this.pizzas);
        o.pipe(
          filter((p: Pizza) => p.name.includes(search))
        ).subscribe(p => newPizzas.push(p));
        this.pizzas = newPizzas;
        console.log(this.pizzas, newPizzas); */
        // On appelle le pizzaService avec une méthode search
        // On passe search en paramètre .searchPizza('Reine')
        // On peut faire une recherche sur l'api avec
        // http://..../pizza?q=Reine
        // On pourra ensuite mettre à jour le tableau de pizza
        // sur la page
        this.pizzas = pizzas;
      });
  }

  ngOnInit() {
    this.loader = true;

    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
      this.loader = false;
    });
  }

  onSelect(pizza?: Pizza): void {
    if (this.selectedPizza && pizza && this.selectedPizza.id !== pizza.id) {
      this.selectedPizza.ingredients = [];
      this.ingredientService.selected.next(false);
      // this.ingredients.forEach(i => i.isSelected = false);
    }

    this.selectedPizza = pizza;
  }

  unSelect(): void {
    this.onSelect();
  }

  updateIngredients(ingredients: Ingredient[]): void {
    if (this.selectedPizza) {
      this.selectedPizza.ingredients = ingredients;
    }
  }

}

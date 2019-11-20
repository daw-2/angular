import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { switchMap, map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  pizza: Pizza;

  @ViewChild('toto', {static: false}) toto: ElementRef;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit() {
    fromEvent(this.toto.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        filter(key => 'Enter' !== key),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(key => {
        console.log(key);
        console.log(this.toto.nativeElement.value);
      });
  }

  ngOnInit() {
    this.pizzaService
        .getPizza(+this.route.snapshot.paramMap.get('id'))
        .then(pizza => this.pizza = pizza);

    console.log('CALL');
    this.route.params
        .pipe(
          switchMap(params => this.pizzaService.getPizza(+params.id))
          // map(params => this.pizzaService.getPizza(+params.id))
        )
        .subscribe(pizza => console.log(pizza));
  }

}

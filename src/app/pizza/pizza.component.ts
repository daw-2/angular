import { Component, Input } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.component.html'
})
export class PizzaComponent {
    @Input('pizza') selectedPizza: Pizza;
}

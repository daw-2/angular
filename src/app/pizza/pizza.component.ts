import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.component.html'
})
export class PizzaComponent {
    @Input('pizza') selectedPizza: Pizza;
    @Output() unselected: EventEmitter<any> = new EventEmitter();

    delete() {
        // Quand une pizza est supprimé, on doit pouvoir informer le composant parent
        this.unselected.emit(this.selectedPizza);
        this.selectedPizza = null;
    }
}

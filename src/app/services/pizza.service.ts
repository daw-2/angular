import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PIZZAS } from '../mocks/pizza.mock';

@Injectable({
    providedIn: 'root'
})
export class PizzaService {
    getPizzas(): Promise<Pizza[]> {
        return Promise.resolve(PIZZAS);
    }

    getPizzasSlowly(): Promise<Pizza[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getPizzas()), 2000);
        });
    }

    // Récupérer une seule pizza
    getPizza(id: number): Promise<Pizza> {
        return this.getPizzas().then(
            pizzas => pizzas.find(pizza => pizza.id === id)
        );
    }
}

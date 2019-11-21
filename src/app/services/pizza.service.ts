import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PizzaService {
    private url = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    getPizzas(): Promise<Pizza[]> {
        return this.http.get(this.url + 'pizzas').toPromise().then(
            response => response as Pizza[]
        );
    }

    getPizzasSlowly(): Promise<Pizza[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getPizzas()), 500);
        });
    }

    // Récupérer une seule pizza
    getPizza(id: number): Promise<Pizza> {
        return this.http.get(this.url + 'pizzas/' + id).toPromise().then(
            response => response as Pizza
        );
    }

    update(pizza: Pizza) {
        return this.http.put(this.url + 'pizzas/' + pizza.id, pizza).toPromise().then(
            () => pizza
        );
    }

    create(pizza: Pizza) {
        return this.http.post(this.url + 'pizzas', pizza).toPromise().then(
            response => response as Pizza
        );
    }

    delete(id: number) {
        return this.http.delete(this.url + 'pizzas/' + id).toPromise();
    }
}

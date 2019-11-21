import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pizza } from '../models/pizza.model';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {
    private url = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    getIngredients(): Observable<Ingredient[]> {
        return this.http.get(`${this.url}ingredients`).pipe(
            map(response => response as Ingredient[])
        );
    }

    getIngredient(id: number): Observable<Ingredient> { }

    create(ingredient: Ingredient): Observable<Ingredient> {
        this.getIngredients().subscribe(response => {
            let id = response[0].id;
            return this.http.post(`${this.url}ingredients/${id}`, ingredient).pipe(
                map(response => response as Ingredient)
            );
        });
    }

    update(id: number): Observable<Ingredient> { }

    delete(id: number): void { }
}

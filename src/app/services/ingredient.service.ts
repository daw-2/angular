import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Pizza } from '../models/pizza.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {
    private url = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getIngredients(): Observable<Ingredient[]> {
        return this.http.get(`${this.url}ingredients`).pipe(
            map(response => response as Ingredient[])
        );
    }

    //getIngredient(id: number): Observable<Ingredient> { }

    create(ingredient: Ingredient): Observable<Ingredient> {
        return this.http.post(`${this.url}ingredients`, ingredient).pipe(
            map(response => response as Ingredient)
        );
    }

    //update(id: number): Observable<Ingredient> { }

    delete(id: number): Observable<Object> {
        return this.http.delete(`${this.url}ingredients/${id}`);
    }

    exists(name: string): Observable<boolean> {
        return this.http.get(`${this.url}ingredients/?name=${name}`).pipe(
            delay(1500),
            map((response: []) => response.length > 0 ? true : false),
        );
    }
}

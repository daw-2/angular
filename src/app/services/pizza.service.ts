import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${env.apiUrl}/pizzas`);
  }

  getPizzasSlowly(): Observable<Pizza[]> {
    return this.getPizzas().pipe(
      delay(1000)
    );
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${env.apiUrl}/pizzas/${id}`);
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${env.apiUrl}/pizzas`, pizza, {withCredentials: true});
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${env.apiUrl}/pizzas/${pizza.id}`, pizza);
  }

  searchPizza(search: string): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${env.apiUrl}/pizza?q=${search}`);
  }

  deletePizza(id: number): Observable<Pizza[]> {
    return this.http
      .delete<Pizza[]>(`${env.apiUrl}/pizzas/${id}`)
      .pipe(
        switchMap(() => this.getPizzas())
      )
    ;
  }
}

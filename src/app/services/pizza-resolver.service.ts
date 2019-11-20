import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { Observable } from 'rxjs';
import { PizzaService } from './pizza.service';

@Injectable({
    providedIn: 'root'
})
export class PizzaResolverService implements Resolve<Pizza[]> {
    constructor(private pizzaService: PizzaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pizza[] | Observable<Pizza[]> | Promise<Pizza[]> {
        return this.pizzaService.getPizzasSlowly();
    }
}

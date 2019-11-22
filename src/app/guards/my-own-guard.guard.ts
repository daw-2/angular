import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MyOwnGuard implements CanActivate {
    constructor(
        private authService: AngularFireAuth,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.authState.pipe(
            map(user => {
                if (user) {
                    return true;
                }

                this.router.navigate(['/login']);
                return false;
            })
        );
    }
}

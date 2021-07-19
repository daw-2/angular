import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  authUser: BehaviorSubject<any> = new BehaviorSubject(null);
  errors: any;

  constructor(private http: HttpClient, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.http.get(`//localhost:8000/api/user`, {withCredentials: true}).pipe(
      catchError(() => this.router.navigate(['/login'])),
      map(user => {
        if (user) {
          return true;
        }

        // Redirect to login...
        this.router.navigate(['/login']);
        return false;
      })
    );
  }

  getUser(): any {
    return this.http.get(`//localhost:8000/api/user`, {withCredentials: true}).subscribe(
      user => this.authUser.next(user),
      () => this.authUser.next(null)
    );
  }

  login(user: Object): void {
    this.http.get(`//localhost:8000/sanctum/csrf-cookie`, {withCredentials: true})
      .pipe(
        switchMap(() => this.http.post(`//localhost:8000/login`, user, {withCredentials: true}))
      ).subscribe(
        user => this.authUser.next(user),
        response => this.errors = response.error.errors
      );
  }

  logout(): void {
    this.http.get('//localhost:8000/api/logout', {withCredentials: true}).subscribe(() => this.authUser.next(null));
  }
}

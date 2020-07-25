import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  exists(username: string): Observable<boolean> {
    return this.http.get<[]>(`${env.apiUrl}/users?username=${username}`).pipe(
      delay(1500),
      map((response: []) => response.length > 0 ? true : false)
    );
  }
}

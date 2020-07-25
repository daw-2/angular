import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from './models/user.model';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template: `
    <h2>{{ name }}</h2>
    <p>AAA</p>
  `, */
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Pizza Party';
  user: User = new User(
    'Mota',
    'Matthieu',
    '1991-11-18',
    'https://www.gravatar.com/avatar/b99c696c18c001d4ed159492cc1406eb?s=40'
  );
  loading: boolean = false;
  socket: SocketIOClient.Socket;
  messages = [];

  @ViewChild('search') search: ElementRef;

  constructor(private router: Router) {
    this.socket = io('http://localhost:4000');
  }

  send(message) {
    this.socket.emit('message', message);
  }

  ngOnInit() {
    this.socket.on('message', message => {
      this.messages.push(message);
    });

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }

      if (event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError) {
        this.loading = false;
      }
    });
  }

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => event.key),
        // debounceTime(500),
        // distinctUntilChanged()
      )
      .subscribe(key => {
        console.log(this.search.nativeElement.value);
      });
  }
}

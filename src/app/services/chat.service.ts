import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private url = 'http://192.168.111.37:4000';
    private socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io(this.url);
    }

    messages(): Observable<Object> {
        return new Observable(observer => {
            this.socket.on('message', message => {
                observer.next(message);
            });
        });
    }

    send(message) {
        this.socket.emit('message', message);
    }
}

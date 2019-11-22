import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
// import * as io from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // socket: SocketIOClient.Socket;
  messages: Object[] = [];
  message = {user: '', value: ''};

  constructor(private chat: ChatService) {
    // this.socket = io('http://192.168.111.37:4000');

    /* this.socket.on('message', (message) => {
      this.messages.push(message);
    }); */
    this.chat.messages().subscribe(
      message => this.messages.push(message)
    );
  }

  send() {
    // Il faudrait pouvoir saisir un pseudo et un message et l'envoyer au serveur
    /* this.socket.emit('message', {
      user: this.message.user,
      value: this.message.value
    }); */
    this.chat.send({
      user: this.message.user,
      value: this.message.value
    });
  }
}

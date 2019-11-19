import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private messages: Message[] = [];

    getMessages(): Promise<Message[]> {
        return Promise.resolve(this.messages);
    }

    addMessage(value: string, type: string = 'success') {
        this.messages.push({value, type});
    }

    deleteMessage(message: Message) {
        this.messages.splice(
            this.messages.indexOf(message), 1
        );
    }
}

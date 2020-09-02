import { Injectable } from '@angular/core';
import { Message, MessageType } from '../models/message';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private messages: Message[] = [];

    getMessages(): Promise<Message[]> {
        return Promise.resolve(this.messages);
    }

    addMessage(content: string, type: MessageType = 'success') {
        this.messages.push({content, type});
    }

    deleteMessage(message: Message) {
        this.messages.splice(
            this.messages.indexOf(message), 1
        );
    }
}

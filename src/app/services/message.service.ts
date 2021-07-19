import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: any[] = [];

  getMessages(): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.messages), 500)
    });
  }

  addMessage(content: string, type: string = 'success'): void {
    this.messages.push({content, type});

    setTimeout(() => this.deleteMessage({content, type}), 2000);
  }

  deleteMessage(message: any): void {
    this.messages.splice(
      this.messages.indexOf(message), 1
    );
  }
}

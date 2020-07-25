export type MessageType = 'danger' | 'success' | 'info';

export class Message {
  content: string;
  type: MessageType;
}

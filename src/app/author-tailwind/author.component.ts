import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PIZZAS } from '../mocks/pizza';
import { Author } from '../models/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @Input() author?: Author | null;
  @Output() choice: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  randomPizza(): void {
    let pizza = PIZZAS[Math.floor(Math.random() * PIZZAS.length)];
    this.choice.emit(pizza);
  }

}

import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { User } from './models/user.model';
import { Ingredient } from './models/ingredient';
import { PizzaService } from './services/pizza.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    li:hover {
      cursor: pointer;
    }
    .selected {
      font-weight: bold;
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'Mon super site';
}

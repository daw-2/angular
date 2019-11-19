import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: Array<Ingredient>;
  @Output() selected: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(ingredient: Ingredient) {
    this.selected.emit(ingredient);
  }

}

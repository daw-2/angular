import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: Array<Ingredient>;
  @Output() selected: EventEmitter<Ingredient> = new EventEmitter();

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  select(ingredient: Ingredient) {
    this.selected.emit(ingredient);
  }

  delete(ingredient: Ingredient) {
    this.ingredientService.delete(ingredient.id).subscribe(_ => {
      console.log('Suppression...');
      this.ingredients = this.ingredients.filter(i => ingredient !== i);
    });
  }

}

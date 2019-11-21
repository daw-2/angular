import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {
  ingredient = { name: 'a', price: 10 };
  ingredientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ingredientForm = fb.group({
      name: fb.control(this.ingredient.name, [Validators.required, Validators.minLength(3)]),
      price: fb.control(this.ingredient.price, Validators.required)
    });
  }

  save() {
    this.ingredient = this.ingredientForm.value;
    console.log(this.ingredientForm);
    console.log(this.ingredient);
  }

  ngOnInit() {
  }
}

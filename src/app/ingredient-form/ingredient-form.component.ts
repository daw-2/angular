import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';
import { ingredientExists } from '../validators/ingredient-exists';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {
  ingredient = { name: 'a', price: 10, image: '', weight: 10 };
  ingredientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ingredientService: IngredientService,
    private router: Router
  ) {
    this.ingredientForm = fb.group({
      name: fb.control(this.ingredient.name, [Validators.required, Validators.minLength(3)], ingredientExists(ingredientService)),
      price: fb.control(this.ingredient.price, Validators.required)
    });
  }

  save() {
    this.ingredient = this.ingredientForm.value;
    console.log(this.ingredientForm);
    console.log(this.ingredient);
    this.ingredientService.create(this.ingredient).subscribe(
      ingredient => this.router.navigate(['/pizzas'])
    );
  }

  ngOnInit() {
  }
}

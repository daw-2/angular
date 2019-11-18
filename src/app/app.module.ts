import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

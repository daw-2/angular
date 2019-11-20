import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { MessagesComponent } from './messages/messages.component';
import { AgePipe } from './pipes/age.pipe';
import { TaxPipe } from './pipes/tax.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HomeComponent } from './home/home.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { PizzaResolverService } from './services/pizza-resolver.service';
import { TestDirective } from './directives/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    MenuComponent,
    MessagesComponent,
    AgePipe,
    TaxPipe,
    SortPipe,
    PizzaListComponent,
    HomeComponent,
    PizzaSingleComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'pizzas',
        component: PizzaListComponent,
        resolve: {
          pizzas: PizzaResolverService
        },
        children: [
          { path: 'test/:id', component: PizzaSingleComponent }
        ]
      },
      { path: 'pizzas/:id', component: PizzaSingleComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

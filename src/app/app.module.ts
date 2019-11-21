import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

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
import { TestDirective } from './directives/test.directive';
import { BgDirective } from './directives/bg.directive';
import { ClearOnDbClickDirective } from './directives/clear-on-db-click.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { CardComponent } from './card/card.component';
import { FakeApi } from './services/fake-api.service';
import { AppRoutingModule } from './app-routing.module';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

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
    TestDirective,
    BgDirective,
    ClearOnDbClickDirective,
    DropdownToggleDirective,
    CardComponent,
    IngredientFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(FakeApi)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaResolverService } from './services/pizza-resolver.service';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
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
            { path: 'pizzas/create', component: PizzaFormComponent },
            { path: 'pizzas/:id', component: PizzaSingleComponent }
        ]),
        FormsModule,
        BrowserModule
    ],
    declarations: [
        PizzaFormComponent
    ],
    exports: [RouterModule, PizzaFormComponent]
})
export class AppRoutingModule { }

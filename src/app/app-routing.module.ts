import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaResolverService } from './services/pizza-resolver.service';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AngularFireAuthGuard, AngularFireAuthGuardModule, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MyOwnGuard } from './guards/my-own-guard.guard';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PasswordComponent } from './password/password.component';
import { NotificationsComponent } from './notifications/notifications.component';

const redirect = () => redirectUnauthorizedTo(['login']);

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
            {
                path: 'pizzas/create',
                component: PizzaFormComponent,
                // canActivate: [MyOwnGuard]
                canActivate: [AngularFireAuthGuard],
                data: { authGuardPipe: redirect }
            },
            { path: 'pizzas/:id', component: PizzaSingleComponent },
            { path: 'pizzas/edit/:id', component: PizzaFormComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'settings', component: SettingsComponent, children: [
            { path: '', redirectTo: '/settings/invoices', pathMatch: 'full' },
            // { path: '', component: HomeComponent },
            { path: 'invoices', component: InvoicesComponent },
            { path: 'password', component: PasswordComponent },
            { path: 'notifications', component: NotificationsComponent }
            ] },
            { path: '**', component: HomeComponent },
            { path: 'ingredients/create', component: IngredientFormComponent },
            { path: 'register', component: RegisterFormComponent },
            { path: 'login', component: LoginFormComponent }
        ]),
        FormsModule,
        BrowserModule,
        AngularFireAuthGuardModule
    ],
    declarations: [
        PizzaFormComponent
    ],
    exports: [RouterModule, PizzaFormComponent]
})
export class AppRoutingModule { }

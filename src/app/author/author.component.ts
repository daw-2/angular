import { Component, Input } from "@angular/core";
import { User } from '../models/user.model';

@Component({
    selector: 'app-author',
    template: `
        <h2>{{ user.firstName + ' ' + user.lastName }}</h2>
        {{ user.birthdate }} : {{ user.age }} <br />
        {{ user.birthdate | age:' ans' }}
        <img [src]="user.avatar">
    `
})
export class AuthorComponent {
    @Input() user: User;

    ngOnInit(): void {
        console.log('OnInit');
    }
    
    ngOnChanges() {
        console.log('OnChanges');
    }
}

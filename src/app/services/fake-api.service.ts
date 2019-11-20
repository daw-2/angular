import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PIZZAS } from '../mocks/pizza.mock';

export class FakeApi implements InMemoryDbService {
    createDb() {
        return {
            pizzas: PIZZAS,
            users: [
                { id: 1, username: 'Matthieu' },
                { id: 2, username: 'Toto' }
            ]
        }
    }
}

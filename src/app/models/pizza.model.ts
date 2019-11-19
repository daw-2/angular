import { Ingredient } from './ingredient';

export class Pizza {
    id: number;
    name: string;
    price: number;
    image?: string;
    ingredient?: Ingredient;
}

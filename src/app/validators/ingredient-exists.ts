import { ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { IngredientService } from '../services/ingredient.service';
import { map } from 'rxjs/operators';

export function ingredientExists(ingredientService: IngredientService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        console.log(control.value);
        console.log(control);

        // Vérifier si l'ingrédient n'existe pas déjà en base avec le même nom
        return ingredientService.exists(control.value).pipe(map(exists => {
            console.log(exists);
            return exists === true ? {exists} : null; // null ou {exists: true}
        }));
        // Si c'est le cas, il faut retourner un objet ex: {exists: true}
        // Sinon on retourne null
        // Dans le template, on peut faire .hasError('exists')

        //return {exists: true};
    }
}

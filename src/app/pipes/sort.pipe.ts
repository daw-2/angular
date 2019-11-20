import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    // let pizza of pizzas | sort:'price':'asc'
    // let pizza of pizzas | sort:'name':'desc'
    transform(value: any, ...args: any[]) {
        // Vérifier que value soit bien un tableau
        if (!Array.isArray(value)) {
            return value;
        }

        // Le premier argument sera name ou price
        // Le second argument sera asc ou desc
        let field = args[0] || 'name';
        let order = args[1] || 'asc';

        // Faire le tri sur les objets du tableau (propriété name ou price)
        let valueSorted = value.sort((a, b) => {
            let compare = 'asc' === order ? a[field] > b[field] : a[field] < b[field];

            return compare ? 1 : -1;
        });

        // Avec lodash
        let valueSortedLodash = _.sortBy(value, [field]);
        if ('desc' === order) valueSortedLodash.reverse();
        // _.orderBy(value, [field], [order]);

        return valueSortedLodash;
    }
}

export class Author {
    constructor(
        public name: string,
        public firstname: string,
        public birthday: string,
        public avatar: string
    ) {}

    get age(): number {
        console.log('calcul from method');
        let currentDate = new Date().getTime();
        let birthDate = new Date(this.birthday).getTime();
        let diff = currentDate - birthDate;
        let age = new Date(diff).getFullYear() - 1970;

        return age;
    }
}

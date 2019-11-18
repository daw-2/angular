export class User {
    lastName: string;
    firstName: string;
    birthdate: string;
    avatar: string;

    constructor(lastName, firstName, birthdate, avatar) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthdate = birthdate;
        this.avatar = avatar;
    }

    get age() {
        let currentDate = (new Date()).getTime();
        let birthDate = (new Date('1991-11-18')).getTime();
        let timeDiff = currentDate - birthDate;
        let age = (new Date(timeDiff)).getFullYear() - 1970;

        return age;
    }
}

export class User {
    name: string;
    firstname: string;
    birthday: string; // 1991-11-18
    avatar: string;
  
    constructor(name, firstname, birthday, avatar) {
      this.name = name;
      this.firstname = firstname;
      this.birthday = birthday;
      this.avatar = avatar;
    }
  
    get age() {
      console.log('age');
      let currentDate = (new Date()).getTime();
      let birthDate = (new Date(this.birthday)).getTime();
      let timeDiff = currentDate - birthDate;
      let age = (new Date(timeDiff)).getFullYear() - 1970;
  
      return age;
    }
  
    get birthdate() {
      let date = new Date(this.birthday);
  
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}

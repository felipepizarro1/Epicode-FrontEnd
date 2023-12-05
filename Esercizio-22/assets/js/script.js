// Variabili JS
class User {
    constructor(firstName,lastName,age,location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto(altro){
        if(this.age>altro.age){
            return console.log(this.firstName + " is older than " + altro.firstName)
        } else {
            return console.log(altro.firstName + " is older than " + this.firstName)
        }
    }
}

let Mario = new User("Mario","Rossi",59,"Milano");
let David = new User("David","Pizarro",65,"Valparaíso");

Mario.confronto(David);
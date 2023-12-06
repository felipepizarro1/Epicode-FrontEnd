
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

/************************************************************************************************ */

class Pet {
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    padrone(altro){
        if(this.ownerName === altro.ownerName){
            return true;
        }
    }

}

let btn = document.getElementById("#petForm button")


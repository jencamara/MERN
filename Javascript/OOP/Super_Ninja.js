// parent class
class Ninja {
    // include the defaults within the parameters
    constructor (speed=3, strength=3, name, health =10){
        this.speed = speed;
        this.strength = strength;
        this.name = name;
        this.health = health;
    }
    // methods
    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name, this.strength, this.speed, this.health);
    }

    drinkSake(){
        this.health +=10;
        console.log(this.health)
    }
}

// child class
class superSensei extends Ninja{
    constructor(name){
        // defaults for the attributes
        super(10, 10, name, 200);
        // new attribute
        this.wisdom = 10;
        
    }
    // new method for child class
    speakWisdom(){
        // calling the parent method
        super.drinkSake(); 
        // console log a message
        console.log("practice, practice, practice.");
    }
    
}

//output
const theSensei = new superSensei("Master AirBender");
theSensei.speakWisdom();
theSensei.showStats();


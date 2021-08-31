class Ninja {
    constructor (speed=3, strength=3, name, health =10){
        this.speed = speed;
        this.strength = strength;
        this.name = name;
        this.health = health;
    }
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

class superSensei extends Ninja{
    constructor(name){
        super(10, 10, name, 200);
        this.wisdom = 10;
        
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

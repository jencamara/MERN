class Ninja {
    constructor (name, health = 0){
        this.speed = 3;
        this.strength = 3;
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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
/* 
####  To Do  ####
- [ ] Team class.  Group of pokemon(members).
    - [ ] method to check hp of members (readyToFight=>array)
- [ ] add more pokemon instances (pidgey, weedle, rattata, psyduck, diglet)
- [ ] add some trainers (team instances)
- [ ] give pokemon xp bars and a method to gain xp
- [ ] define max-xp, level-up a pokemon at max-xp
*/
import { types } from './_types';
import { abilities } from './_abilities';
import { Pokemon } from './_pokemon';

class Trainer {
  constructor(name, team) {
    this.name = name;
    this.team = team;
  }
  
}

class Bulbasaur extends Pokemon {
  constructor() {
    super("Bulbasaur", "bulba..!", types["grass"]);
    this.moveset.push(abilities["vineWhip"]);
  }
}

class Charmander extends Pokemon {
  constructor() {
    super("Charmander", "charrr..!", types["fire"]);
    this.moveset.push(abilities["ember"]);
  }
}

class Squirtle extends Pokemon {
  constructor() {
    super("Squirtle", "squii..!", types["water"]);
    this.moveset.push(abilities["bubble"]);
  }
}

console.log("*******************")

let charmander = new Charmander();
let squirtle = new Squirtle();
let bulbasaur = new Bulbasaur();

console.log("*******************")

bulbasaur.attack(charmander, 1);

console.log("*******************")

console.log(charmander);
console.log(squirtle);
console.log(bulbasaur);

console.log("*******************")

console.log(charmander.hp);

console.log("*******************")

let playerRed = new Trainer("Red", [new Squirtle(), new Charmander()]);
console.log(playerRed);

console.log("*******************")

// Battle

// console.log("*******************")


// charmander.attack(bulbasaur, 0);
// console.log(bulbasaur.hp);

// bulbasaur.attack(charmander, 1);
// console.log(charmander.hp);

// charmander.attack(bulbasaur, 1);
// console.log(bulbasaur.hp);

// console.log("*******************")
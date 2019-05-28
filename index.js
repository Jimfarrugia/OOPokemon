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
  constructor(level) {
    super("Bulbasaur", "bulba..!", types["grass"], level);
    this.moveset.push(abilities["vineWhip"]);
  }
}

class Charmander extends Pokemon {
  constructor(level) {
    super("Charmander", "charrr..!", types["fire"], level);
    this.moveset.push(abilities["ember"]);
  }
}

class Squirtle extends Pokemon {
  constructor(level) {
    super("Squirtle", "squii..!", types["water"], level);
    this.moveset.push(abilities["bubble"]);
  }
}


let charmander = new Charmander(2);
let squirtle = new Squirtle(3);
let bulbasaur = new Bulbasaur(4);

console.log("*******************")

bulbasaur.attack(charmander, 1);

console.log("*******************")

console.log(charmander);
console.log(squirtle);
console.log(bulbasaur);

console.log("*******************")

console.log(charmander.hp);

console.log("*******************")

let playerRed = new Trainer("Red", [new Squirtle(1), new Charmander(1)]);
console.log(playerRed);

console.log("*******************")
playerRed.team.map(e => console.log(e));

// Battle

// console.log("*******************")


// charmander.attack(bulbasaur, 0);
// console.log(bulbasaur.hp);

// bulbasaur.attack(charmander, 1);
// console.log(charmander.hp);

// charmander.attack(bulbasaur, 1);
// console.log(bulbasaur.hp);

// console.log("*******************")
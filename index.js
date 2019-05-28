/* 
####  To Do  ####
- [ ] Team class.  Group of pokemon(members).
    - [ ] method to check hp of members (readyToFight=>array)
- [ ] 
- [ ] give pokemon xp bars and a method to gain xp
- [ ] define max-xp, level-up a pokemon at max-xp
*/

import { types } from './_types';
import { abilities } from './_abilities';
import { Pokemon } from './_pokemon';

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

let charmander = new Charmander();
console.log(charmander);

let bulbasaur = new Bulbasaur();
console.log(bulbasaur);

console.log("*******************")

bulbasaur.attack(charmander, 1);
console.log(charmander.hp);

charmander.attack(bulbasaur, 0);
console.log(bulbasaur.hp);

bulbasaur.attack(charmander, 1);
console.log(charmander.hp);

charmander.attack(bulbasaur, 1);
console.log(bulbasaur.hp);

console.log("*******************")
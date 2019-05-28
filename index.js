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


// console.log(types);
// console.log(abilities);


//console.log(abilities);
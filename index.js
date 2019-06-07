/* 
####  To Do  ####
- [x] Team class.  Group of pokemon(members).
    - [x] method to check hp of members (readyToFight=>array)
- [ ] add more pokemon instances (pidgey, weedle, rattata, psyduck, diglet)
- [ ] add some trainers (team instances)
- [ ] simulate a trainer battle
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
  ableFighters() {
    return this.team.map(member => {if (member.hp > 0) { return member }});
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
class Pidgey extends Pokemon {
  constructor(level) {
    super("Pidgey", "squaarr..!", types["flying"], level);
    this.moveset.push(abilities["gust"]);
  }
}

const battle = (player1, player2) => {
  

  if (player1.ableFighters().length < 1) {
    return `${player2} wins! ${player1} has run out of pokemon!`;
  }
  if (player2.ableFighters().length < 1) {
    return `${player1} wins! ${player2} has run out of pokemon!`;
  }

  //if (player)
  //console.log(`player1 has ${playerBlue.ableFighters().length} pokemon`)

  player1.ableFighters()[0].attack(player2.ableFighters()[0], 1)
  console.log(player2.ableFighters()[0])
}

let playerRed = new Trainer("Red", [new Squirtle(1), new Charmander(1)]);
//console.log(playerRed);

let playerBlue = new Trainer("Blue", [new Pidgey(1), new Bulbasaur(1)]);
//console.log(playerBlue);

battle(playerRed, playerBlue);

// game loop...
// if readyFighters.length is not > 0 for either player at any time, they lose
// player red attacks player blue
// if player blue's pokemon has < 1 hp, choose a new pokemon
// player blue attacks player red
// if player red's pokemon has < 1 hp, choose a new pokemon
// if both players have ready fighters, loop again
// if one player has run out of pokemon, end loop
// *edge case* both players pokemon die at the same time

console.log("*******************");

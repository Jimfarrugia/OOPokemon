import { types } from './_types';
import { abilities } from './_abilities';

export class Pokemon {
  constructor(name, cry, type, level) {
    this.level = level;
    this.hp = 50;
    this.name = name;
    cry ? this.cry = cry : this.cry = "goo-goo ga-ga";
    type ? this.type = type : this.type = types["normal"];
    this.moveset = [
      abilities["tackle"]
    ];
  }

  // Print a pokemon's cry
  speak() {
    console.log(`${this.name} cries: "${this.cry}"`);
  }

  // List pokemon's abilities
  listMoveset() {
    console.log(`${this.name} has the following abilities:`);
    this.moveset.map(e =>{ 
      console.log(
      `Name: ${e.name},`,
      `Power: ${e.power},`,
      `Type: ${e.type.name}`);
    });
    console.log(this.moveset)
  }

  // Attack another pokemon
  attack(target, moveNum) {
    let ability = this.moveset[moveNum];
    let damage = ability.power;
    
    if (ability.type.goodMatchup === target.type.name) {
      // Super Effective
      damage = Math.floor(damage * 1.5)
    }

    if (ability.type.badMatchup === target.type.name) {
      // Not Very Effective
      damage = Math.floor(damage * 0.5)
    }

    return target.hp -= damage;
  }
}
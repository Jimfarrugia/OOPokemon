import { types } from './_types';

export class Ability {
  constructor(name, power, type) {
    this.name = name;
    this.power = power;
    
    if (typeof(type) === 'undefined') {
      // set default value
      this.type = types["normal"];
    }
    else {
      // use passed value
      this.type = type;
    }
  }
}

export const abilities = {
  "tackle": new Ability("tackle", 10),
  "ember": new Ability("ember", 15, types["fire"]),
  "bubble": new Ability("bubble", 15, types["water"]),
  "vineWhip": new Ability("vine whip", 15, types["grass"]),
  "gust": new Ability("gust", 15, types["flying"])
  //"name": Ability("name", "power", "type")
}

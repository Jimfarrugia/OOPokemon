export class Type {
  constructor(name, goodMatchup, badMatchup) {
    this.name = name;
    // goodMatchup & badMatchup values are made false if undefined
    goodMatchup === "undefined" ? this.goodMatchup = false : this.goodMatchup = goodMatchup;
    badMatchup === "undefined" ? this.badMatchup = false : this.badMatchup = badMatchup;
  }
}

export const types = {
  "normal": new Type("normal"),
  "fire": new Type("fire", "grass", "water"),
  "water": new Type("water", "fire", "grass"),
  "grass": new Type("grass", "water", "fire")
  //"name": Type("name", "goodMatchup", "badMatchup")
}
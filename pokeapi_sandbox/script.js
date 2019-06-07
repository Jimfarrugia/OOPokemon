class Pokemon {
  constructor(name) {

    let url = "https://pokeapi.co/api/v2/pokemon/";

    this.name = name;

    fetch(`${url}${name}`)
      .then(resp => resp.json())
      .then(data => {
        this.stats = data.stats;
        this.types = data.types;
        this.moves = data.moves;
        this.image = data.sprites.front_default;
      })
      .catch(error => {
        console.log(error);
      })
    
  }
}
const bulbasaur = new Pokemon("bulbasaur");
console.log(bulbasaur);
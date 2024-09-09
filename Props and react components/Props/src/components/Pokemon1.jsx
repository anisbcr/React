import React from "react";
import Props from "./Props";

function pokemon() {
  
const pokemons = [
  {
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: ["Electric"],  
  },
  {
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["Grass", "Poison"],
  },
  {
    name: "Charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: ["Fire"],
  },
  {
    name: "Squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: ["Water"],
  },
  {
    name: "Jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    types: ["Normal", "Fairy"],
  },
  {
    name: "Meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    types: ["Normal"],
  },
  {
    name: "Psyduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    types: ["Water"],
  },
  {
    name: "Machop",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    types: ["Fighting"],
  },
  {
    name: "Magnemite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    types: ["Electric", "Steel"],
  },
  {
    name: "Dugtrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    types: ["Ground", "Steel"],
  },
  {
    name: "Poliwag",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    types: ["Water"],
  },
  {
    name: "Golbat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    types: ["Poison", "Flying"],
  },
];
  return (
    <div className="poke-gallery">
      {pokemons.map((pokemon, index) => (
        <Props
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export default pokemon;

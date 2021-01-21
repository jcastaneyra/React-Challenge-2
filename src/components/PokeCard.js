import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  return (
    <div>
      <h1>{mockPokemonData.name}</h1>
      <img src={mockPokemonData.sprites.front_default} alt="front default" />
      <img src={mockPokemonData.sprites.front_shiny} alt="front shiny" />
      <br />
      <a href={mockPokemonData.video}>Pokemon video</a>
    </div>
  );
};

export default PokeCard;

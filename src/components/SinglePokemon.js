import React from "react";
import { useFetchSinglePokemon } from "../queries/pokemon";

export const SinglePokemon = () => {
  const { data } = useFetchSinglePokemon("charizard");
  return <div>{<img src={data?.sprites.front_default} alt='pokemon' />}</div>;
};

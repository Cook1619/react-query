import { usePokemon } from "../queries/pokemon";

export const Count = () => {
  const { data } = usePokemon();
  return <h3>There are {data?.length} pokemon</h3>;
};

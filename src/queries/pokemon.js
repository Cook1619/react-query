import { useQuery } from "react-query";
import axios from "axios";

export function usePokemon() {
  return useQuery(
    "pokemon",
    () => {
      return axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.data.results);
    },
    // { refetchOnWindowFocus: false } // when flagged false will not re-fetch data upon focus change
    // { staleTime: 5000 } // query remains fresh and we not re-fetch for 5 seconds
    { cacheTime: 5000 }
  );
}

export function useBerry() {
  return useQuery(
    "berry",
    () => {
      return axios
        .get("https://pokeapi.co/api/v2/berry")
        .then((res) => res.data.results);
    },
    // { refetchOnWindowFocus: false } // when flagged false will not re-fetch data upon focus change
    // { staleTime: 5000 } // query remains fresh and we not re-fetch for 5 seconds
    { cacheTime: 5000 }
  );
}

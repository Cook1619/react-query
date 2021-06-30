import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

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

const Count = () => {
  const { data } = usePokemon();
  return <h3>There are {data?.length} pokemon</h3>;
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Count />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

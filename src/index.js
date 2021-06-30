import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Pokemon } from "./Pokemon";
import { SinglePokemon } from "./components/SinglePokemon";
import { Berry } from "./components/Berry";
import { Count } from "./components/Count";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Count />
      <Pokemon />
      <Berry />
      <SinglePokemon />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

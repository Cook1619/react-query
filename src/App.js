import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";

function App() {
  const { isLoading, error, data } = useQuery("pokemon", () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.data.results)
  );
  return isLoading ? (
    <h1>Loading.....</h1>
  ) : error ? (
    <h1>ERROR ${error.message}</h1>
  ) : (
    <div>
      {data?.map((result) => {
        return <div key={result.name}>{result.name}</div>;
      })}
    </div>
  );
}

export default App;

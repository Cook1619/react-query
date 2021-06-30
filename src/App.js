import "./App.css";
import { usePokemon } from "./index";

function App() {
  const { isLoading, error, data, isFetching } = usePokemon();
  return isLoading ? (
    <h1>Loading.....</h1>
  ) : error ? (
    <h1>ERROR ${error.message}</h1>
  ) : (
    <div>
      {data?.map((result) => {
        return <div key={result.name}>{result.name}</div>;
      })}
      <br />
      {isFetching ? "Updating" : null}
    </div>
  );
}

export default App;

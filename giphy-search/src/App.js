import "./App.css";
import SearchGifs from "./SearchGifs";

function App() {
  //Main app components rendering search Gif Component
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Giphy Gif Search</h1>
        <SearchGifs />
      </div>
    </div>
  );
}

export default App;

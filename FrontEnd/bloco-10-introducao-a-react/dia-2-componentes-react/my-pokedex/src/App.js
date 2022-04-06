import Pokemon from "./Pokemon";
import data from "./data";
import "./App.css";

function App() {
  return (
    <main className="main">
      <div className="title">
        <h1>Pokedex</h1>
      </div>
      <div className="container">
        {data.map(item => 
        <Pokemon key={item.id} objeto={item} /> )}
      </div>
    </main>
  );
}

export default App;

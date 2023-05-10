import MyCounter from "./components/myCounter";
import Cart from "./components/Cart";
import Game from "./components/NumberGame"
import "./App.css";

const items = [
  {name: 'Item1', price: 10, min: 0, max: 100},
  {name: 'Item2', price: 20, min: 0, max: 50},
];

function App() {
  return (
    <div className="App">
      <MyCounter />
      <Cart items={items}/>
      <Game/>
    </div>
  );
}

export default App;

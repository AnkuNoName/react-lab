import Item from "./components/Item";
import Cart from "./components/Cart";
import CitiesList from "./components/CitiesList";

function App() {
  const cartArr = [
    { name: "1", price: "24000" },
    { name: "2", price: "50000" },
    { name: "3", price: "45000" },
    { name: "4", price: "760" },
  ];

  return (
    <div className="wrapper">
      <div className="task-one">
        <h2>Завдвння 1</h2>
        <div>Hello World!</div>
      </div>

      <div className="task-two">
        <h2>Завдвння 2</h2>
        <table>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>Dima</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>Ankudevich</td>
            </tr>
            <tr>
              <td>Occupation</td>
              <td>Front-End</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="task-three">
        <h2>Завдвння 3</h2>
        <Item title="Title" text="text" />
      </div>

      <div className="task-fore">
        <h2>Завдвння 4</h2>
        <div className="taskInner">
          {cartArr.map((obj) => (
            <Cart name={obj.name} price={obj.price} />
          ))}
        </div>
      </div>

      <div className="CitiesList">
        <CitiesList />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <PackageList />
      <Stats />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Far away</h1>
    </header>
  );
}
function Form() {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) return;
    console.log(quantity, item);

    setQuantity(1);
    setItem("");
  };

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>

        <select onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Item..."
        ></input>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

function PackageList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
}

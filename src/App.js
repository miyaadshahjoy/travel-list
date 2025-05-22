import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
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
function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setQuantity(1);
    setDescription("");
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item..."
        ></input>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
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

import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Header from "./Header";

export default function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

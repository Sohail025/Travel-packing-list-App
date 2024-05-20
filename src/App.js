import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./packinglist";
import Stats from "./stats";
export default function App() {
  const [item, setItem] = useState([]);
  function Handleitems(item) {
    setItem((items) => [...items, item]);
  }
  function DeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function togglecut(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function Clear() {
    const confirmed = window.confirm("Are you sure to delete the all items");
    if (confirmed) setItem([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form handler={Handleitems} />
      <PackingList
        items={item}
        DeleteItem={DeleteItem}
        togglecut={togglecut}
        Clear={Clear}
      />
      <Stats item={item} />
    </div>
  );
}

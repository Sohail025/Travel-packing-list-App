import { useState } from "react";
export default function Form({ handler }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function SubmitHandler(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now() * Math.round(Math.random() * 100),
    };
    handler(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={SubmitHandler}>
      <h3>What do you need for you Trip ❤</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Done</button>
    </form>
  );
}

import { useState } from "react";
import Item from "./items.js";
export default function PackingList({ items, DeleteItem, togglecut, Clear }) {
  const [sortby, setsortby] = useState("input");
  let selected;
  if (sortby === "input") selected = items;
  if (sortby === "description")
    selected = items.sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed");
  selected = items.sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {selected.map((ob) => {
          return (
            <Item
              obj={ob}
              DeleteItems={DeleteItem}
              key={ob.description}
              togglecut={togglecut}
            />
          );
        })}
      </ul>
      <div>
        <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value={"description"}>View by description</option>
          <option value={"input"}>View input</option>
          <option value={"packed"}>View by packed</option>
        </select>
      </div>
      <button onClick={Clear}>Clear Items</button>
    </div>
  );
}

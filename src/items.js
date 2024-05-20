export default function Item({ obj, DeleteItems, togglecut }) {
  return (
    <>
      {obj.id && (
        <li>
          <input
            type="checkbox"
            value={obj.packed}
            onChange={() => togglecut(obj.id)}
          ></input>
          <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
            {obj.quantity} {obj.description}
          </span>
          <button onClick={() => DeleteItems(obj.id)}>❌</button>
        </li>
      )}
    </>
  );
}

export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="footer">
        <em>Please add some items</em>
      </p>
    );
  const unPacked = item.length;
  const packed = item.filter((item) => item.packed).length;
  const percentage =
    packed > 0 && unPacked > 0 ? Math.round((packed * 100) / unPacked) : "0";
  return (
    <footer className="stats">
      <em>
        You have {unPacked} items in the list and You Packed {packed}{" "}
        {`-- ${percentage}%`}
      </em>
    </footer>
  );
}

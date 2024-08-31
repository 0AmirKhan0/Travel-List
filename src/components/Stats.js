export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list🚀</p>
      </footer>
    );
  }

  const totalItem = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalItem) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You got every thing! Ready to go🛫"
        : `💼 You have ${totalItem} items on your list, and you already packed ${totalPacked}(${
            isNaN(percentage) ? 0 : percentage
          }%)`}
    </footer>
  );
}

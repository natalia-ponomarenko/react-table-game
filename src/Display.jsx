export function Display({ hoveredCells }) {

  console.log(hoveredCells)
  return (
    <div>
      <h2>Hovered Cells:</h2>
      <ul>
        {hoveredCells.map((cell, index) => (
          <li key={index}>{cell}</li>
        ))}
      </ul>
    </div>
  );
}

import { Cell } from "./Cell";

export function Field({ field, setHoveredCell }) {

  const tableStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${field}, 50px)`,
  };

  const cells = [];

  for (let row = 0; row < field; row++) {
    for (let col = 0; col < field; col++) {
      cells.push(
        <Cell
          key={`${row}-${col}`}
          rowIndex={row + 1}
          columnIndex={col + 1}
          setHoveredCell={setHoveredCell}
        />
      );
    }
  }

  return (
    <div className="table-container">
      <div className="table" style={tableStyle}>{cells}</div>
    </div>
  );
}

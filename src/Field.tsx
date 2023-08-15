import React from "react";
import { Cell } from "./Cell";

type Props = {
  field: number;
  handleCellHover: (cellInfo: string, isHovered: boolean) => void;
};

export const Field: React.FC<Props> = ({ field, handleCellHover }) => {
  const tableStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${field}, 30px)`,
  };

  const cells: JSX.Element[] = [];

  for (let row = 0; row < field; row++) {
    for (let col = 0; col < field; col++) {
      cells.push(
        <Cell
          key={`${row}-${col}`}
          rowIndex={row + 1}
          columnIndex={col + 1}
          handleCellHover={handleCellHover}
        />
      );
    }
  }

  return (
    <div className="table-container">
      <div
        className="table"
        style={tableStyle}
      >
        {cells}
      </div>
    </div>
  );
};

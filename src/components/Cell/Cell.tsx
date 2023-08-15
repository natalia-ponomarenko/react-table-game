import React, { useCallback, useState } from "react";
import "../../app.css";

type Props = {
  handleCellHover: (cellInfo: string, isHovered: boolean) => void;
  rowIndex: number;
  columnIndex: number;
};

export const Cell: React.FC<Props> = ({
  handleCellHover,
  rowIndex,
  columnIndex,
}) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = useCallback(() => {
    setHovered(!isHovered);
    handleCellHover(`row: ${rowIndex}, col: ${columnIndex}`, !isHovered);
  }, [setHovered, handleCellHover, rowIndex, columnIndex, isHovered]);

  const cellStyle = {
    background: isHovered ? "blue" : "white",
  };

  return (
    <div
      className="cell"
      style={cellStyle}
      onMouseEnter={handleHover}
    ></div>
  );
};

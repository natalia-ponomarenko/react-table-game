import { useState } from "react";
import "./app.css";

export function Cell({ setHoveredCell, rowIndex, columnIndex }) {
  const [isHovered, setHovered] = useState(0);

  const handleHover = () => {
    setHovered((isHovered) => !isHovered);
    setHoveredCell(`Row: ${rowIndex}, Col: ${columnIndex}`)
  };

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
}

import React from "react";

type Props = {
  hoveredCells: string[];
};

export const Display: React.FC<Props> = ({ hoveredCells }) => {
  return (
    <>
      <h2 className="title is-4">Hover Squares:</h2>
      <ul className="list">
        {hoveredCells.map((cell, index) => (
          <li key={index}>{cell}</li>
        ))}
      </ul>
    </>
  );
};

import React from "react";
import { Mode } from "./types/Mode";
import "./app.css";

type Props = {
  modes: Mode[];
  setSelectedMode: (mode: Mode | undefined) => void;
};

export const Select: React.FC<Props> = ({ modes, setSelectedMode }) => {
  return (
    <div className="select-container">
      <div className="select">
        <select
          onChange={(e) => {
            setSelectedMode(modes.find((mode) => mode.id === e.target.value));
          }}
        >
          <option value="">Select a mode</option>
          {modes.map((mode) => (
            <option
              key={mode.id}
              value={mode.id}
            >
              {mode.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;

import { useState, useEffect } from "react";
import { Select } from "./Select";
import { Button } from "./Button";
import { Field } from "./Field";
import { Display } from "./Display";
import { fetchModes } from "./utils/helperFunctions";

function App() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [hoveredCells, setHoveredCells] = useState([]);

  useEffect(() => {
    fetchModes(setModes);
  }, []);

  useEffect(() => {
    if (hoveredCell) {
      setHoveredCells((prevHoveredCells) => [...prevHoveredCells, hoveredCell]);
    }
  }, [hoveredCell]);

  useEffect(() => {
    if(gameStarted && selectedMode) {
      setGameStarted(false);
      setHoveredCells([]);
    }
  }, [selectedMode]);

  const handleStart = () => {
    if (selectedMode) {
      setGameStarted(true);
    }
  };

  return (
    <div>
      <h1 className="title">React Table App</h1>
      <Select
        modes={modes}
        setSelectedMode={setSelectedMode}
      />
      <Button action={handleStart}>Start</Button>
      {selectedMode && gameStarted && (
        <Field
          field={selectedMode.field}
          setHoveredCell={setHoveredCell}
        />
      )}
      <Display hoveredCells={hoveredCells} />
    </div>
  );
}

export default App;

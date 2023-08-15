import React, { useState, useEffect, useCallback } from "react";
import { Select } from "./components/Select/Select";
import { Button } from "./components/Button/Button";
import { Field } from "./components/Field/Field";
import { Display } from "./components/Display/Display";
import { fetchModes } from "./utils/fetchModes";
import { Mode } from "./types/Mode";

const App: React.FC = () => {
  const [modes, setModes] = useState<Mode[]>([]);
  const [selectedMode, setSelectedMode] = useState<Mode | undefined>();
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [hoveredCells, setHoveredCells] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
    fetchModes()
      .then((data) => {
        setModes(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (gameStarted && selectedMode) {
      setGameStarted(false);
    }
  }, [selectedMode]);

  const handleStart = useCallback(() => {
    if (selectedMode) {
      setGameStarted(true);
      //clean the result when clicking the start button
      setHoveredCells([]);
    }
  }, [selectedMode]);

  const handleCellHover = useCallback((cellInfo: string, isHovered: boolean) => {
    if (isHovered) {
      setHoveredCells((prevHoveredCells) => [...prevHoveredCells, cellInfo]);
    } else {
      setHoveredCells((prevHoveredCells) =>
        prevHoveredCells.filter((cell) => cell !== cellInfo)
      );
    }
  }, [setHoveredCells]);

  return (
    <div className="container">
      <h1 className="title">React Table App</h1>
      <div className="game-wrapper">
        <div className="left">
          <div className="mode-wrapper">
            {loading && <p>Loading modes...</p>}
            {error && <p>Error fetching modes</p>}
            {!loading && !error && (
              <>
                <Select
                  modes={modes}
                  setSelectedMode={setSelectedMode}
                />
                <Button
                  action={handleStart}
                  text="Start"
                />
              </>
            )}
          </div>
          {selectedMode && gameStarted && (
            <Field
              field={selectedMode.field}
              handleCellHover={handleCellHover}
            />
          )}
        </div>
        <div className="right">
          <Display hoveredCells={hoveredCells} />
        </div>
      </div>
    </div>
  );
};

export default App;

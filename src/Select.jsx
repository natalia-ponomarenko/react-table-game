export const Select = ({ modes, setSelectedMode }) => {
  return (
    <div className="select-container">
      <div className="select">
        <select
          onChange={(e) => {
            setSelectedMode(modes.find((mode) => mode.id === e.target.value))
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

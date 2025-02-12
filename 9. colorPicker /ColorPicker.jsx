import React, { useState } from "react";

export default function ColorPicker() {
  function handleColorChange(event) {
    setColor(event.target.value);
  }

  const [color, setColor] = useState("#FFFFFF");
  return (
    <div className="color-picker-container">
      <h1>Pick Color</h1>
      <div>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </div>
  );
}

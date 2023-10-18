import React from "react";
import "./ToggleButton.css";

function ToggleButton({
  onClick,
  value,
  offText,
  onText,
}: {
  onClick: () => void;
  value: boolean;
  offText: string;
  onText: string;
}) {
  return (
    <label>
      <div className="toggleButtonContainer">
        <button
          className={`toggleButton ${value ? "right" : "left"}`}
          onClick={onClick}
        ></button>
      </div>
      {value ? onText : offText}
    </label>
  );
}

export default ToggleButton;

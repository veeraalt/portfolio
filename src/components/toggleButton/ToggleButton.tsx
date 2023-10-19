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
    <div className="toggleButtonContainer">
      <button
        className={`toggleButton ${value ? "right" : "left"}`}
        onClick={onClick}
        aria-label={value ? onText : offText}
      ></button>
      <span className="toggleButtonLabel" aria-hidden="true">
        {value ? onText : offText}
      </span>
    </div>
  );
}

export default ToggleButton;

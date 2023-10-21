import React from "react";
import "./ToggleButton.css";

export const ToggleButton = ({
  onClick,
  value,
  offLabel,
  onLabel,
}: {
  onClick: () => void;
  value: boolean;
  offLabel: string;
  onLabel: string;
}) => {
  return (
    <div className="toggleContainer">
      <div className="toggleButtonContainer">
        <button
          className={`toggleButton ${value ? "right" : "left"}`}
          onClick={onClick}
          aria-label={value ? `Switch to ${offLabel}` : `Switch to ${onLabel}`}
        ></button>
      </div>
      <span aria-hidden="true">{onLabel}</span>
    </div>
  );
};

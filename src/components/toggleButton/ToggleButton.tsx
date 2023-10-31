import React from "react";
import "./ToggleButton.css";

export const ToggleButton = ({
  onClick,
  value,
  label,
}: {
  onClick: () => void;
  value: boolean;
  label: string;
}) => {
  return (
    <div className="toggleContainer">
      <div className="toggleButtonContainer">
        <button
          className={`toggleButton ${value ? "right" : "left"}`}
          onClick={onClick}
          aria-label={`Dark mode ${value ? "on" : "off"}`}
        ></button>
      </div>
      <span aria-hidden="true">{label}</span>
    </div>
  );
};

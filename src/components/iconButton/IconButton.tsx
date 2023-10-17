import React from "react";
import "./IconButton.css";

function IconButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button className="iconButton">
      {label} <img className="icon" src={icon} alt="" />
    </button>
  );
}

export default IconButton;

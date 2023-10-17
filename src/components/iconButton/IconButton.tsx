import React from "react";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import "./IconButton.css";

function IconButton({
  label,
  src,
  target,
  rel,
}: {
  label: string;
  src: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a className="iconButton" href={src} target={target} rel={rel}>
      {label}
      <ArrowIcon />
    </a>
  );
}

export default IconButton;

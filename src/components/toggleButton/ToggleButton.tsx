import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="toggleContainer">
      <div className="toggleButtonContainer">
        <button
          className={`toggleButton ${value ? "right" : "left"}`}
          onClick={onClick}
          aria-label={`${label} ${value ? t("common.on") : t("common.off")}`}
        ></button>
      </div>
      <span aria-hidden="true">{label}</span>
    </div>
  );
};

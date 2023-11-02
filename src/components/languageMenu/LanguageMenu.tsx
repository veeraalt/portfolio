import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaLanguage as LanguageIcon } from "react-icons/fa6";
import { FaAngleDown as ArrowDownIcon } from "react-icons/fa6";
import { FaAngleUp as ArrowUpIcon } from "react-icons/fa6";
import { FaCheck as CheckmarkIcon } from "react-icons/fa6";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import "./LanguageMenu.css";

export const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isLanguageMenuOpen = Boolean(anchorEl);
  const { t } = useTranslation();
  const { currentLanguage, languages, changeLanguage } = LanguageSelector();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    isLanguageMenuOpen ? handleClose() : setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    handleClose();
  };

  return (
    <>
      <button
        className="languageButton"
        onClick={handleClick}
        aria-controls={isLanguageMenuOpen ? "languageMmenu" : undefined}
        aria-haspopup="true"
        aria-expanded={isLanguageMenuOpen ? "true" : undefined}
        aria-label={t("settings.language.select")}
      >
        <LanguageIcon size="44" className="languageIcon" />
        <span aria-hidden="true">{currentLanguage}</span>
        {isLanguageMenuOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
      <Menu
        className="languageMenu"
        anchorEl={anchorEl}
        id="languageMenu"
        open={isLanguageMenuOpen}
        onClose={handleClose}
        onClick={handleClose}
      >
        {languages.map((option, index) => (
          <MenuItem
            key={index}
            className="languageOption"
            onClick={() => handleLanguageChange(option.value)}
            value={option.value}
            selected={currentLanguage === option.value}
          >
            {option.label}
            {currentLanguage === option.value && <CheckmarkIcon size="14" />}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FaLanguage as LanguageIcon } from "react-icons/fa6";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ToggleButton } from "../toggleButton/ToggleButton";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import { NavigationLink } from "../../interfaces/common";
import "./MobileMenu.css";

export const MobileMenu = ({
  navigationLinks,
  forwardedRef,
  isDark,
  toggleDarkMode,
}: {
  navigationLinks: Array<NavigationLink>;
  forwardedRef: React.RefObject<HTMLDivElement>;
  isDark: boolean;
  toggleDarkMode: () => void;
}) => {
  const { t } = useTranslation();
  const { currentLanguage, languages, changeLanguage } = LanguageSelector();

  return (
    <div
      className="menu"
      ref={forwardedRef}
      role="dialog"
      aria-label={t("common.menu")}
    >
      {navigationLinks.map((link) => (
        <NavLink className="menuLink" to={link.to} key={link.to}>
          {link.text}
        </NavLink>
      ))}
      <div className="settingsContainer">
        <hr />
        <div className="languageContainer">
          <FormControl>
            <FormLabel>
              <div className="languageLabel" aria-hidden="true">
                {t("settings.language.title")}
                <LanguageIcon size="28" />
              </div>
              <RadioGroup
                className="languageRadioButtonGroup"
                aria-label={t("settings.language.title")}
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                {languages.map((option, index) => (
                  <FormControlLabel
                    className="languageRadioButton"
                    key={index}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                    aria-label={option.label}
                    checked={currentLanguage === option.value}
                  />
                ))}
              </RadioGroup>
            </FormLabel>
          </FormControl>
        </div>
        <div className="themeContainer">
          <label>
            {t("settings.theme.title")}
            <ToggleButton
              onClick={toggleDarkMode}
              value={isDark}
              label={t("settings.theme.dark")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

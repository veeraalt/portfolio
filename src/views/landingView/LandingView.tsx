import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaUser as PersonIcon,
  FaCode as WorkIcon,
  FaBook as HobbyIcon,
} from "react-icons/fa6";
import "./LandingView.css";

const LandingView = () => {
  const { t } = useTranslation();

  return (
    <div className="infoContainer">
      <h1 className="name">{t("home.name")}</h1>
      <h2 className="shortIntro">{t("home.title")}</h2>
      <div className="introOuterContainer card">
        <div className="introContainer">
          <PersonIcon />
          <p>{t("home.intro1")}</p>
        </div>
        <div className="introContainer">
          <WorkIcon />
          <p className="introText">
            <span>{t("home.intro2")}</span>
            <a
              className="inlineLink highlight"
              href="https://www.aalto.fi"
              target="_blank"
              rel="noreferrer"
            >
              {t("home.keyword1")}
            </a>
            <span>{t("home.to")}</span>
            <a
              className="inlineLink highlight"
              href="https://www.huutokaupat.com"
              target="_blank"
              rel="noreferrer"
            >
              {t("home.keyword2")}
            </a>
            <span>{t("home.and")}</span>
            <a
              className="inlineLink highlight"
              href="https://peoplecloudpro.com/"
              target="_blank"
              rel="noreferrer"
            >
              {t("home.keyword3")}
            </a>
            .
          </p>
        </div>
        <div className="introContainer">
          <HobbyIcon />
          <p>{t("home.intro3")}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingView;

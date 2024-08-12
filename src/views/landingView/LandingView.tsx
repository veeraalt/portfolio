import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import "./LandingView.css";

const LandingView = () => {
  const { t } = useTranslation();

  return (
    <div className="infoContainer">
      <h1 className="shortIntro">{t("home.hi")}</h1>
      <h2 className="name">{t("home.name")}.</h2>
      <p>
        {t("home.intro1")}
        <span className="highlight">{t("home.keyword")}</span>
        {t("home.intro2")}
      </p>
      <p>{t("home.intro3")}
        <a className="highlight inlineLink" href="https://www.aalto.fi" target="_blank" rel="noreferrer">{t("home.project1")}</a>
        {t("home.to")}
        <a className="highlight inlineLink" href="https://www.huutokaupat.com" target="_blank" rel="noreferrer">{t("home.project2")}</a>
        {t("home.and")}
        <a className="highlight inlineLink" href="https://www.peoplecloudpro.com" target="_blank" rel="noreferrer">{t("home.project3")}</a>{"."}
      </p>
      <p>{t("home.intro4")}</p>
      <div className="linkContainer">
        <Link to="/projects" className="pageLink">
          {t("common.projects")}
          <ArrowIcon />
        </Link>
        <Link to="/cv" className="pageLink">
          {t("common.cv")}
          <ArrowIcon />
        </Link>
        <Link to="/contact" className="pageLink">
          {t("common.contact")}
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default LandingView;

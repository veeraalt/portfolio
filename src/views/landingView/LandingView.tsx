import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import "./LandingView.css";

const LandingView = () => {
  const { t } = useTranslation();

  return (
    <div className="infoContainer">
      <h1>{t("home.hi")}</h1>
      <h2>{t("home.shortIntro")}</h2>
      <p>
        {t("home.longIntro1")}{" "}
        <span className="highlight">{t("home.keyword1")}</span>{" "}
        {t("home.longIntro2")}{" "}
        <span className="highlight">{t("home.keyword2")}</span>.
      </p>
      <p>{t("home.longIntro3")}</p>
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

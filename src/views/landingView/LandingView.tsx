import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaChevronRight as ArrowIcon,
  FaUser as PersonIcon,
  FaBriefcase as WorkIcon,
  FaPalette as HobbyIcon,
} from "react-icons/fa6";
import "./LandingView.css";

const LandingView = () => {
  const { t } = useTranslation();

  return (
    <div className="infoContainer">
      <h1 className="shortIntro">{t("home.hi")}</h1>
      <h2 className="name">{t("home.name")}.</h2>
      <div className="introContainer">
        <PersonIcon />
        <p>{t("home.intro1")}</p>
      </div>
      <div className="introContainer">
        <WorkIcon />
        <p>{t("home.intro2")}</p>
      </div>
      <div className="introContainer">
        <HobbyIcon />
        <p>{t("home.intro3")}</p>
      </div>
    </div>
  );
};

export default LandingView;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUser as PersonIcon,
  FaCode as WorkIcon,
  FaHammer as HobbyIcon,
} from "react-icons/fa6";
import "./LandingView.css";

const LandingView = () => {
  const { t } = useTranslation();

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % 5);
      }, 1200); // Change word every 1.2 seconds
    } else {
      setCurrentWordIndex(0); // Reset to first word when not hovered
    }

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [isHovered]);

  return (
    <div className="infoContainer">
      <h1 className="name">{t("home.name")}</h1>
      <div
        className="titleContainer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="shortIntro">
          {isHovered
            ? t(`home.title${currentWordIndex + 1}`)
            : t("home.title1")}
        </h2>
      </div>
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

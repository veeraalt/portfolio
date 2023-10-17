import React, { useEffect, useState } from "react";
import IconButton from "../iconButton/IconButton";
import cvFile from "../../assets/cv_veera_alt.pdf";
import "./LandingPage.css";

function LandingPage() {
  const darkModeSaved = window.localStorage.getItem("dark-mode");
  const [isDarkModeOn, setDarkModeOn] = useState(
    darkModeSaved === "true" ? true : false
  );

  const handleDarkModeToggle = () => {
    if (!isDarkModeOn) {
      window.localStorage.setItem("dark-mode", "true");
    } else {
      window.localStorage.removeItem("dark-mode");
    }
    setDarkModeOn(!isDarkModeOn);
  };

  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkModeOn]);

  return (
    <div className="bodyContainer">
      <div className="infoContainer">
        <h1>Hi!</h1>
        <h2>My name is Veera Alt.</h2>
        <p>
          I'm a fullstack developer with emphasis on frontend. I'm also
          interested in design and accessibility.
        </p>
        <p>
          My driving <span className="highlight">passion</span> is to build
          responsive websites that work smoothly and are visually engaging.
        </p>
        <div className="linkContainer">
          <IconButton label="Projects" src="" />
          <IconButton
            label="CV"
            src={cvFile}
            target="_blank"
            rel="noreferrer"
          />
          <IconButton label="Contact" src="" />
        </div>
      </div>
      <div className="toggleButtonContainer">
        <button
          className="toggleButton iconButton"
          onClick={handleDarkModeToggle}
        >
          {isDarkModeOn ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

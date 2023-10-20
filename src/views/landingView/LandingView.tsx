import React from "react";
import { Link } from "react-router-dom";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import { useColorScheme } from "../../hooks/useColorScheme";
import "./LandingView.css";

function LandingView() {
  const { isDarkModeOn, handleDarkModeToggle } = useColorScheme();

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
          <Link to="/projects" className="redirectLink">
            Projects
            <ArrowIcon />
          </Link>
          <Link to="/CV" className="redirectLink">
            CV
            <ArrowIcon />
          </Link>
          <Link to="/contact" className="redirectLink">
            Contact
            <ArrowIcon />
          </Link>
        </div>
      </div>
      <ToggleButton
        onClick={handleDarkModeToggle}
        value={isDarkModeOn}
        offText="Light mode"
        onText="Dark mode"
      />
    </div>
  );
}

export default LandingView;

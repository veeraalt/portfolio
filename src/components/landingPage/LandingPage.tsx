import React from "react";
import arrowIcon from "../../assets/right_arrow.svg";
import IconButton from "../iconButton/IconButton";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="infoContainer">
      <h1>Hi!</h1>
      <h2>My name is Veera Alt.</h2>
      <p>
        I'm a fullstack developer with emphasis on frontend. I'm also interested
        in design and accessibility.
      </p>
      <p>
        My driving <span className="highlight">passion</span> is to build
        responsive websites that work smoothly and are visually engaging.
      </p>
      <div className="linkContainer">
        <IconButton label="Projects" icon={arrowIcon} />
        <IconButton label="CV" icon={arrowIcon} />
        <IconButton label="Contact" icon={arrowIcon} />
      </div>
    </div>
  );
}

export default LandingPage;

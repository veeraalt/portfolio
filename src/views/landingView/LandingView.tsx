import React from "react";
import { Link } from "react-router-dom";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import "./LandingView.css";

const LandingView = () => {
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
        <Link to="/projects" className="pageLink">
          Projects
          <ArrowIcon />
        </Link>
        <Link to="/cv" className="pageLink">
          CV
          <ArrowIcon />
        </Link>
        <Link to="/contact" className="pageLink">
          Contact
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default LandingView;
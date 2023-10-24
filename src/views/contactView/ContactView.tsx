import React from "react";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa6";
import { FaGithub as GithubIcon } from "react-icons/fa6";
import ContactForm from "../../components/contactForm/ContactForm";
import "./ContactView.css";

const ContactView = () => {
  return (
    <div className="contactContainer">
      <h1>Contact me</h1>
      <p>
        Interested in working with me? Shoot me a message here or in{" "}
        <a
          className="inlineLink"
          href={process.env.REACT_APP_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        .
      </p>

      <ContactForm />

      <div className="contactLinkContainer">
        <a
          className="contactLink"
          href={process.env.REACT_APP_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon size="44" />
          linkedin
        </a>
        <a
          className="contactLink"
          href={process.env.REACT_APP_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size="44" />
          github
        </a>
      </div>
    </div>
  );
};

export default ContactView;

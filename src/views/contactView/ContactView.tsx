import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa6";
import { FaGithub as GithubIcon } from "react-icons/fa6";
import ContactForm from "../../components/contactForm/ContactForm";
import "./ContactView.css";

const ContactView = () => {
  const { t } = useTranslation();

  return (
    <div className="contactContainer">
      <h1>{t("contact.title")}</h1>

      <p className="card">
        {t("contact.intro")}{" "}
        <a
          className="highlight inlineLink"
          href={import.meta.env.VITE_LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
        >
          {t("contact.linkedin")}
        </a>
        .
      </p>

      <div className="contactContent">
        <ContactForm />

        <div className="contactLinkContainer">
          <a
            className="contactLink"
            href={import.meta.env.VITE_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={0} // TODO: Why is this needed?
          >
            <LinkedinIcon size="44" />
            linkedin
          </a>
          <a
            className="contactLink"
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={0}
          >
            <GithubIcon size="44" />
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactView;

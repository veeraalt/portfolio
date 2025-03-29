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
      <p className="card">{t("contact.intro")}</p>
      <ContactForm />
    </div>
  );
};

export default ContactView;

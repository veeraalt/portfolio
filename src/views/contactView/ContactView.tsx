import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa6";
import { FaGithub as GithubIcon } from "react-icons/fa6";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import "./ContactView.css";

const ContactView = () => {
  const contactForm = useRef<HTMLFormElement>(null);
  const [alertMessageType, setAlertMessageType] = useState<
    "success" | "error" | undefined
  >(undefined);
  const errorMessage =
    "Something went wrong. Please try again later or contact me via Linkedin.";
  const successMessage = "The email was sent successfully.";

  /* Send email when form is submitted correctly */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setAlertMessageType(undefined);
    e.preventDefault();

    contactForm.current &&
      emailjs
        .sendForm(
          process.env.REACT_APP_MAIL_SERVICE_ID,
          process.env.REACT_APP_MAIL_TEMPLATE_ID,
          contactForm.current,
          process.env.REACT_APP_MAIL_PUBLIC_KEY
        )
        .then(
          (result: Response) => {
            setAlertMessageType("success");
          },
          (error: Error) => {
            setAlertMessageType("error");
          }
        );
  };

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

      <form ref={contactForm} className="contactForm" onSubmit={sendEmail}>
        <label className="contactFormField">
          Name *
          <input
            className="contactFormInput"
            type="text"
            name="name"
            required
          />
        </label>
        <label className="contactFormField">
          Email address *
          <input
            className="contactFormInput"
            type="email"
            name="email"
            required
          />
        </label>
        <label className="contactFormField">
          Message *
          <textarea className="contactFormInput" name="message" required />
        </label>

        {alertMessageType && (
          <Alert className="alertMessage" status={alertMessageType}>
            <AlertIcon />
            <Box>
              <AlertTitle>
                {alertMessageType === "error" ? "Bummer!" : "Success!"}
              </AlertTitle>
              <AlertDescription>
                {alertMessageType === "error" ? errorMessage : successMessage}
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              border="none"
              right={-1}
              top={-1}
              onClick={() => setAlertMessageType(undefined)}
            />
          </Alert>
        )}

        <input
          className="pageLink submitButton"
          type="submit"
          value="Send"
          disabled={alertMessageType === "success"}
        />
      </form>
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
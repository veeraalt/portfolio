import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import "./ContactForm.css";

const ContactForm = () => {
  const contactForm = useRef<HTMLFormElement>(null);
  const [alertMessageType, setAlertMessageType] = useState<
    "success" | "error" | undefined
  >(undefined);
  const errorMessage =
    "Something went wrong. Please try again later or contact me via Linkedin.";
  const successMessage = "The email was sent successfully.";

  /* Send email when form is submitted correctly */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertMessageType(undefined);

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
    <form ref={contactForm} className="contactForm" onSubmit={sendEmail}>
      <label className="contactFormField">
        Name *
        <input
          className="contactFormInput"
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          required
        />
      </label>
      <label className="contactFormField">
        Email address *
        <input
          className="contactFormInput"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
        />
      </label>
      <label className="contactFormField">
        Message *
        <textarea
          className="contactFormInput"
          name="message"
          id="message"
          autoComplete="off"
          required
        />
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
  );
};

export default ContactForm;

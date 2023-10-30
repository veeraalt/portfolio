import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { ContactFormData } from "../../interfaces/common";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const errorMessage =
    "Something went wrong. Please try again later or contact me via Linkedin.";
  const successMessage = "The email was sent successfully.";

  const resetAlert = () => {
    setAlertMessage(null);
    setAlertType(null);
  };

  /* Send email when form is submitted correctly */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetAlert();

    emailjs
      .send(
        process.env.REACT_APP_MAIL_SERVICE_ID,
        process.env.REACT_APP_MAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_MAIL_PUBLIC_KEY
      )
      .then(
        (result: Response) => {
          setAlertMessage(successMessage);
          setAlertType("success");
        },
        (error: Error) => {
          setAlertMessage(errorMessage);
          setAlertType("error");
        }
      );
  };

  /* Handler to update form data */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="contactForm" onSubmit={sendEmail}>
      <label className="contactFormField">
        Name *
        <input
          className="contactFormInput"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
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
          value={formData.email}
          onChange={handleInputChange}
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
          value={formData.message}
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
      </label>

      {alertType && (
        <Alert
          className="alertMessage"
          severity={alertType}
          variant="filled"
          onClose={resetAlert}
        >
          {alertMessage}
        </Alert>
      )}

      <input
        className="pageLink submitButton"
        type="submit"
        value="Send"
        disabled={alertType === "success"}
      />
    </form>
  );
};

export default ContactForm;

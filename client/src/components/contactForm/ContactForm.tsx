import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { ContactFormData } from "../../interfaces/common";
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const errorMessage = t("contact.form.errorMessage");
  const successMessage = t("contact.form.successMessage");

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
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_MAIL_PUBLIC_KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
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
        {`${t("contact.form.name")} *`}
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
        {`${t("contact.form.email")} *`}
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
        {`${t("contact.form.message")} *`}
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
        value={t("contact.form.send")}
        disabled={alertType === "success"}
      />
    </form>
  );
};

export default ContactForm;

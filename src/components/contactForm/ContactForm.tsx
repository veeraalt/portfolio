import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { ContactFormData } from "../../interfaces/common";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resetAlert = () => {
    setAlertMessage(null);
    setAlertType(null);
  };

  /* Send email when form is submitted correctly */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    resetAlert();

    emailjs
      .send(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_MAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setAlertMessage(t("contact.form.successMessage"));
          setAlertType("success");
          setIsLoading(false);
        },
        () => {
          setAlertMessage(t("contact.form.errorMessage"));
          setAlertType("error");
          setIsLoading(false);
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
    <form className="contactForm" onSubmit={handleSubmit}>
      <label className="contactFormField">
        {t("contact.form.name")}
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
        {t("contact.form.email")}
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
        {t("contact.form.message")}
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

      {isLoading ? (
        <LoadingSpinner text={t("common.sending")} />
      ) : (
        <button
          className="button submitButton"
          type="submit"
          disabled={alertType === "success"}
        >
          {t("common.send")}
        </button>
      )}
    </form>
  );
};

export default ContactForm;

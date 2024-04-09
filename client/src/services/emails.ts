import axios from "axios";
import { ContactFormData } from "../interfaces/common";

export const sendEmail = async (formData: ContactFormData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/send-email`,
    formData
  );
  return response.data;
};

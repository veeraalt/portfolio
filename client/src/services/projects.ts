import axios from "axios";

export const getProjects = async (language: string) => {
  const request = axios.get(
    `${import.meta.env.VITE_API_URL}/projects/${language}`
  );
  return request.then((response) => response.data);
};

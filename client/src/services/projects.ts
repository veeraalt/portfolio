import axios from "axios";
const baseUrl = "http://localhost:3001/api";

export const getProjects = async (language: string) => {
  const request = axios.get(`${baseUrl}/projects/${language}`);
  return request.then((response) => response.data);
};

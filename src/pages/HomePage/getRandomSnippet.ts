import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getRandomSnippet = async (language: string) => {
  const response = await axios.get(`${apiUrl}${language}`);
  return response.data;
};

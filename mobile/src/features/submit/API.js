import axios from "axios";

const url = "http://localhost:8080/api/app";

export const sendEntry = async (data) => {
  const response = await axios.post(url, data);
  return response.data;
};

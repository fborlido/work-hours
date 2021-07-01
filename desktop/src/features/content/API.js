import axios from "axios";

const url = "http://localhost:8080/api/desktop";

export const fetchAll = async () => {
  const res = await axios.get(url);
  return res.data;
};

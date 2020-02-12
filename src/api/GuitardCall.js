import axios from "axios";

export const getGuitardList = url => {
  return axios.get(url);
};

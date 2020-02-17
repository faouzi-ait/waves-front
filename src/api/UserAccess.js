import axios from "axios";

export const loginUser = (url, body) => {
  return axios.post(url, body).then(result => {
    localStorage.setItem("waves_token", result.data.token);
    localStorage.setItem("waves_user", JSON.stringify(result.data.user));
  });
};

export const sendPostRequest = (url, body) => {
  return axios.post(url, body).then(result => result);
};

export const sendAuthenticatedPostRequest = (url, body, header) => {
  return axios.post(url, body, header).then(result => result);
};

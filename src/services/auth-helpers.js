import Axios from "axios";

const TOKEN_KEY = "jwt";

export function setToken(token) {
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function deleteToken() {
  window.localStorage.removeItem(TOKEN_KEY);
}

export function initAxiosInterceptors() {
  Axios.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  });
}

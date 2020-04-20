import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";

export function login(email, password) {
  return axios.post(apiEndpoint, {
    email,
    password,
  });
}

import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/register";

export function register(user) {
  return axios.post(apiEndpoint, {
    email: user.email,
    name: user.name,
    password: user.password,
  });
}

import http from "./httpService";
import { apiUrl } from "../config.json";
//import { saveMovie } from "./fakeMovieService";

const apiEndpoint = apiUrl + "/auth";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}

import http from "./httpService";
import { apiUrl } from "../config.json";
//import { saveMovie } from "./fakeMovieService";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
}

export function saveMovies(movieData) {
  http.post(apiEndpoint + "/" + movieData.movieId, movieData);
}

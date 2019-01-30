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

export function saveMovie(movie) {
  //create
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndpoint + "/" + movie._id, body);
  }

  //update
  return http.post(apiEndpoint, movie);
}

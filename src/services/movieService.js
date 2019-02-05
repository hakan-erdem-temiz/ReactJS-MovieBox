import http from "./httpService";
//import { saveMovie } from "./fakeMovieService";

const apiEndpoint = "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function deleteMovie(movieId) {
  http.delete(movieUrl(movieId));
}

export function saveMovie(movie) {
  //update
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    console.log("ms:" + movie);
    return http.put(movieUrl(movie._id), body);
  }

  //create
  return http.post(apiEndpoint, movie);
}

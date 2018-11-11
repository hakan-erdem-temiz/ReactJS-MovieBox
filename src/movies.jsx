import React, { Component } from "react";
import { getMovies, deleteMovie } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  checkMoviesExist() {
    const moviesCount = this.state.movies.length;
    return moviesCount > 0 ? (
      <p>Showing {moviesCount} movies in the database </p>
    ) : (
      <p> no movie</p>
    );
  }

  handleDelete(movie) {
    deleteMovie(movie);
    this.setState({ movies: getMovies() });
  }

  render() {
    return (
      <div>
        {this.checkMoviesExist()}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, id) => (
              <tr key={id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(movie._id);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;

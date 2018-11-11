import React, { Component } from "react";
import { getMovies, deleteMovie } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete(movieId) {
    const movies = this.state.movies.filter(m => m._id !== movieId._id);
    this.setState({ movies }); //same as this.setState({ movies:movies });
  }

  render() {
    const { length: count } = this.state.movies; //rename length as count
    //const count = this.state.movies.length;

    if (count === 0) return <p>There are no movies in the database</p>;

    return (
      <div>
        <p>Showing {count} movies in the database </p>
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
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(movie);
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

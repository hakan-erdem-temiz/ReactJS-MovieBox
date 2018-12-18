import React, { Component } from "react";
import {
  getMovies,
  deleteMovie,
  setFavorite
} from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import listGroup from "./common/listGroup";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [], // component didmount
    currentGenre: "Action",
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    //call services
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete(movieId) {
    const movies = this.state.movies.filter(m => m._id !== movieId._id);
    this.setState({ movies }); //same as this.setState({ movies:movies });
  }

  handleLike = movie => {
    console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    console.log(genre);
    this.setState({ currentGenre: genre.name });
  };

  render() {
    const { length: count } = this.state.movies; //rename length as count
    //const count = this.state.movies.length;
    const {
      pageSize,
      currentPage,
      currentGenre,
      movies: serverMovies
    } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    const movies = paginate(
      serverMovies.filter(m => m.genre.name === currentGenre),
      currentPage,
      pageSize
    );

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={this.state.genres}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenreSelect}
            currentGenre={this.state.currentGenre}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      likeData={movie}
                      onLike={() => this.handleLike(movie)}
                    />
                  </td>
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
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;

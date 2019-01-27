import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [], // component didmount
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: [],
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    //call services
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
      selectedGenre: genres ? genres[0] : null
    });
  }

  handleDelete = movieId => {
    const movies = this.state.movies.filter(m => m._id !== movieId._id);
    this.setState({ movies }); //same as this.setState({ movies:movies });
  };

  handleAdd = () => {
    console.log("Added");
  };

  handleLike = movie => {
    //console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    //console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    //console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
    this.setState({ searchQuery: "" });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = input => {
    const inputName = input.currentTarget.value;
    const machList = this.state.movies.filter(
      n =>
        n.title.substring(0, inputName.length).toLowerCase() ==
        inputName.toLowerCase()
    );

    console.log(input.currentTarget.value);
    this.setState({ searchQuery: machList });
    this.setState({ selectedGenre: null });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies; //rename length as count
    //const count = this.state.movies.length;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
            to={{
              pathname: "/movies/new",
              state: { genres: this.state.genres }
            }}
          >
            New Movie
          </Link>
          <p>Showing {totalCount} movies in the database </p>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleSearch}
          />
          <MoviesTable
            movies={this.state.selectedGenre ? movies : this.state.searchQuery}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Movies;

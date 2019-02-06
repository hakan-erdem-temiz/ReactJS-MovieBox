import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
      liked: false
    },
    genres: [],
    likeOptions: [{ name: "true", _id: true }, { name: "false", _id: false }],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
    liked: Joi.boolean().required()
  };

  async populateGenres() {
    const { data: genres } = await getGenres(); //data.genres
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    //i divide it in two function to tell a stroy of componentdidmounth
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    console.log("movie:" + movie);
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      liked: movie.liked === undefined ? false : movie.liked
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    //console.log(match);
    //console.log(history);
    // let handleSave = () => {
    //   history.push("/movies");
    // };

    return (
      <div>
        <h1>movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderSelect("liked", "Liked", this.state.likeOptions)}
          {this.renderInput("numberInStock", "NumberInStock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;

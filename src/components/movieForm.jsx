import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class movieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberinstock: "",
      rate: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    genre: Joi.required(),
    numberinstock: Joi.number()
      .integer()
      .min(0)
      .max(100),
    rate: Joi.number()
      .integer()
      .min(0)
      .max(100)
  };

  genderlist = () => {
    let genreList = [];
    let genres = this.props.location.state.genres;

    for (let genre of genres) {
      if (genre["_id"]) genreList.push(genre);
    }

    return genreList.map(genre => (
      <option key={genre["_id"]}>{genre["name"]}</option>
    ));
  };

  saveChanges = () => {
    console.log(this.props.location);
  };

  render() {
    const { match, history, location } = this.props;
    //console.log(match);
    //console.log(history);
    // let handleSave = () => {
    //   history.push("/movies");
    // };

    return (
      <div>
        <h1>movieForm</h1>
        <p>{match.params.id}</p>
        {this.renderInput("title", "Title")}
        <div>
          <label htmlFor="Genre">Genre</label>
          <div>
            <select id="selectGenre">
              <option />
              {this.genderlist()}
            </select>
          </div>
        </div>

        {this.renderInput("numberinstock", "NumberInStock")}
        {this.renderInput("rate", "Rate")}

        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}

export default movieForm;

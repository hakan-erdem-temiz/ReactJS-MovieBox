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

  render() {
    const { match, history } = this.props;
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
        {this.renderInput("genre", "Genre")}
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

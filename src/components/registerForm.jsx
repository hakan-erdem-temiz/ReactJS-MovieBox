import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username")
      .email({ minDomainAtoms: 2 }),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Name")
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

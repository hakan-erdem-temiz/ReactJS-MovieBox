import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//import * as genresAPI from "./fakeGenreService";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <Switch>
          <Route path="/movies" Component={Movies} />
          <Route path="/customers" Component={Customers} />
          <Route path="/Rentals" Component={Rentals} />
          <Route path="/notfound" Component={NotFound} />
          <Route path="/" excat Component={Movies} />
        </Switch> */}
        <Route path="/customers" Component={Customers} />
        <main className="container">
          <h1>Movie List App:</h1>
          <Movies />
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//import * as genresAPI from "./fakeGenreService";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <NavBar />
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/Rentals" component={Rentals} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/" excat component={Movies} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

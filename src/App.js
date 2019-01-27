import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/NotFound";
import movieForm from "./components/movieForm";
import loginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar />
          <Switch>
            {/* <Route
              path="/movies/:id"
              render={props => (
                <MovieForm
                  genres="genreNames"
                  location={props.location}
                  {...props}
                />
              )}
            /> send variable*/}
            <Route path="/login" component={loginForm} />
            <Route path="/movies/:id" component={movieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/notfound" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

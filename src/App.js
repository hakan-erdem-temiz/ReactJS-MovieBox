import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ProtectedRoute from "./components/common/protectedRoute";
import Logout from "./components/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import authService from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <NavBar user={user} />
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            {/* <Route
              path="/movies/:id"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <MovieForm {...props} />;
              }}
            /> */}
            <Route
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            />
            <ProtectedRoute path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

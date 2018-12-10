import React, { Component } from "react";
//import * as genresAPI from "./fakeGenreService";
import "./App.css";
import Movies from "./movies";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <h1>Movie List App:</h1>
          <Movies />
        </main>
      </div>
    );
  }
}

export default App;

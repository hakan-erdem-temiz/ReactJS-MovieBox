import React, { Component } from "react";

const movieForm = ({ match, history }) => {
  console.log(match);
  console.log(history);
  // let handleSave = () => {
  //   history.push("/movies");
  // };

  return (
    <div>
      <h1>movieForm</h1>
      <p>{match.params.id}</p>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default movieForm;

import React from "react";

const ListGroup = props => {
  const genres = props.genres;
  const className = "list-group-item list-group-item-action";
  return (
    <div className="list-group">
      {genres.map(genreName => (
        <a
          className={
            genreName.name === props.currentGenre
              ? className + " active"
              : className
          }
          style={{ cursor: "pointer" }}
          key={genreName._id}
          onClick={() => props.onGroupChange(genreName)}
        >
          {genreName.name}
        </a>
      ))}
    </div>
  );
};

export default ListGroup;

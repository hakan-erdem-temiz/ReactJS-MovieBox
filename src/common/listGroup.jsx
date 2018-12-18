import React from "react";

const ListGroup = props => {
  const { genres, textProperty, valueProperty, currentGenre } = props;
  const className = "list-group-item list-group-item-action";
  return (
    <div className="list-group">
      {genres.map(item => (
        <a
          className={
            item.name === currentGenre ? className + " active" : className
          }
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          onClick={() => props.onItemSelect(item)}
        >
          {item[textProperty]}
        </a>
      ))}
    </div>
  );
};

export default ListGroup;

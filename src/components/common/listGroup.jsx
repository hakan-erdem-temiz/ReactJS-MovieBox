import React from "react";

const ListGroup = props => {
  const { genres, textProperty, valueProperty, selectedItem } = props;
  const className = "list-group-item list-group-item-action";
  return (
    <ul className="list-group">
      {genres.map(item => (
        <li
          className={item === selectedItem ? className + " active" : className}
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          onClick={() => props.onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

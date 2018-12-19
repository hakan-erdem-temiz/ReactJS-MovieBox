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
          key={item[valueProperty] ? item[valueProperty] : item[textProperty]}
          onClick={() => props.onItemSelect(item)}
        >
          {console.log(item[valueProperty])}
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

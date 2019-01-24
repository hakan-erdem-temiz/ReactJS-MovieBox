import React, { Component } from "react";

//we dont need state so we create functional component inside of controller component

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="from-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="fom-control"
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

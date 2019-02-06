import React from "react";

//we dont need state so we create functional component inside of controller component

const Input = ({ name, label, error, ...rest }) => {
  //aynı olanlar yerine ...rest yazdım  ({ type, name, label, value, error, onChange })
  return (
    <div className="from-group">
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          autoFocus
          //value={value}
          //onChange={onChange}
          //type={type}
          name={name}
          {...rest}
          id={name}
          className="fom-control"
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

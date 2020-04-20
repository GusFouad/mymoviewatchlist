import React from "react";
const Input = ({ name, label, value, error, onChange, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        className="form-control"
        type={type}
      />
      {error && <div className="alert alert-danger">{error}</div>}{" "}
    </div>
  );
};

export default Input;

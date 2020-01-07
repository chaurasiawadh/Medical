import React from "react";

const Input = props => {
  const { value,id, onChange, name, label, autoFocus, error, type, placeholder, err } = props;
  console.log('value', value)
  return (
    <div className="form-group">
      <label htmlFor={name} style={{fontSize:20}}>{label}</label>
      <input
        autoFocus={autoFocus}
        className="form-control"
        style={{fontSize:20, marginLeft:10}}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
        key={id}
        err={err}
      />
      {error && <div className="alert alert-danger m-2">{error}</div>}
    </div>
  );
};
export default Input;
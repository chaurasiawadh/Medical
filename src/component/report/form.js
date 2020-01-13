import React from "react";
import Input from "./input";
import Dialog from "./reportDialog";

class Form extends React.Component {

  
  renderBtn = (str) => {
    return (
      <button className="btn btn-success form-control m-2" style={{ fontSize: 20 }} disabled={this.state.disableBtn} onClick={this.handleSubmit}>
        {str}
      </button>
    );
  };
  renderInput = (name, label, placeholder, type = "text", handleChange) => {
    const { data, errors } = this.state;
    return (
      <Input
        autoFocus={false}
        label={label}
        value={data[name]}
        type={type}
        onChange={handleChange}
        name={name}
        error={errors[name]}
        placeholder={placeholder}
        err={this.state.err}
      />
    );
  };
}

export default Form;

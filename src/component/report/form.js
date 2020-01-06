import React from "react";
import Input from "./input";
import firebase from "firebase/app";
import "firebase/firestore";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
    disableBtn: false,
    err:null
  };


  handleSubmit =() => {
      const {
        name,
        phone,
        email,
        address,
        productName,
        brand,
        lot,
        strength,
        dose,
        batch,
        otherInfo,
        reactionType,
        reactionInfo,
        dataOccur,
        timeOccur
      } = this.state.data;

      event.preventDefault();
      firebase
        .firestore()
        .collection("report")
        .add({
          name,
          phone,
          email,
          address,
          productName,
          brand,
          lot,
          strength,
          dose,
          batch,
          otherInfo,
          reactionType,
          reactionInfo,
          dataOccur,
          timeOccur
        })
        .then((response) => {
          console.log("post***********************");
        })
        .catch(err => alert(err))
   
  };

  
  renderBtn = () => {
    return (
      <button
        className="btn btn-success form-control m-2"
        style={{ fontSize: 20 }}
        disabled={this.state.disableBtn}
        onClick={this.handleSubmit}
      >
        Post
      </button>
    );
  };


  renderInput = (name, label, placeholder, type = "text") => {
    const { data, errors } = this.state;
    {
      data.name &&
      data.phone &&
      data.email &&
      data.address &&
      data.productName &&
      data.brand &&
      data.lot &&
      data.strength &&
      data.dose &&
      data.batch &&
      data.otherInfo &&
      data.reactionType &&
      data.reactionInfo &&
      data.dataOccur &&
      data.timeOccur
        ?  console.log('1') //this.setState({disableBtn: false})
        :  console.log('0')
    }
  
    return (
      <Input
        autoFocus={false}
        label={label}
        value={data[name]}
        type={type}
        onChange={this.handleChange}
        name={name}
        error={errors[name]}
        placeholder={placeholder}
        err={this.state.err}
      />
    );
  };
}

export default Form;

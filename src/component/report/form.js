import React from "react";
import Input from "./input";
import firebase from "firebase/app";
import "firebase/firestore";

import Dialog from "./reportDialog";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
    disableBtn: true,
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

      console.log("hhhh",  this.state.data )
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


  
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    if (input.name === "reactionType") {
      data[input.name] = [input.value];
      console.log("working");
    } else data[input.name] = input.value;
    this.setState({ data });
  };
  handleToggle = () => {
    const dialog = { ...this.state.dialog };

    dialog.visible === "hidden"
      ? (dialog.visible = "visible")
      : (dialog.visible = "hidden");
    this.setState({ dialog });
    console.log(dialog.visible);
  };

  renderDialog = () => {
    return (
      <Dialog
        visible={this.state.dialog.visible}
        data={this.state.data}
        onClick={this.handleToggle}
      />
    );
  };


  renderInput = (name, label, placeholder, type = "text") => {
    const { data, errors } = this.state;
    
    // console.log("*********",  data )
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
        ?  this.setState({disableBtn: false})
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

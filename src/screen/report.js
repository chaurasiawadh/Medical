import React, { Component } from "react";
import Form from "../component/report/form";
import "../css/report.css";
import "firebase/firestore";
import firebase from "firebase/app";

const list = [
  { id: 1, head: "name", label: "Name", inputs: "Enter Name" },
  { id: 2, head: "phone", label: "Mobile No.", inputs: "Enter Mobile", type: "number" },
  { id: 3, head: "email", label: "Email", inputs: "Enter Email", type: "email" },
  { id: 4, head: "address", label: "City", inputs: "Enter City" },
  { id: 6, head: "productName", label: "Product Name", inputs: "Enter Product Name" },
  { id: 7, head: "brand", label: "Brand", inputs: "Enter Brand" },
  { id: 8, head: "lot", label: "Lot No.", inputs: "123 Generics" },
  { id: 9, head: "strength", label: "Strength", inputs: "Enter Strength" },
  { id: 10, head: "dose", label: "Dose", inputs: "eg. 2 times per day" },
  { id: 11, head: "batch", label: "Batch No.", inputs: "100" },
  { id: 12, head: "otherInfo", label: "Other Info", inputs: "Developing new medicines can take years and significant investment." },
  { id: 13, head: "reactionType", label: "Reaction Type", inputs: "Ige-mediated" },
  { id: 14, head: "reactionInfo", label: "Reaction Info", inputs: "Anaphylaxis from β-lactam antibiotic" },
  { id: 15, head: "dateOccur", label: "Data Occur", inputs: "Health-related information" },
  { id: 16, head: "timeOccur", label: "Time Occur", inputs: "5 days" }
];

class Report extends Form {
  state = {
    data: {},
    errors: {},
    disableBtn: true,
    err:null
  };

  handleSubmit =() => {
    const { name, phone, email, address, productName, brand, lot, strength, dose, batch, otherInfo, reactionType, reactionInfo, dateOccur, timeOccur } = this.state.data;
    firebase.firestore().collection("report").add({
       name, phone, email, address, productName, brand, lot, strength, dose, batch, otherInfo, reactionType, reactionInfo, dateOccur, timeOccur 
    })
    .then((response) => {
       console.log(`Data saved`);
       window.location.pathname="/"; 
      })
    .catch(err => alert(err))
  };
  
  checkForSubmitButton = ()=> {
    const {data} = this.state;
    
    if(Object.keys(data).length &&  data.name != "" && data.phone != "" && data.email != "" && data.address != "" && data.productName != "" && data.brand != "" && data.lot != "" && data.strength != "" && data.dose != "" && data.batch != "" && data.otherInfo != "" && data.reactionType != "" && data.reactionInfo != "" && data.dateOccur != "" && data.timeOccur != ""){
      this.setState({disableBtn: false});
    }else this.setState({disableBtn: true});
  }


  handleChange = ({ currentTarget: input }) => {
    this.checkForSubmitButton();
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  
  render() {
    return (
      <div className="report-container">
        <div className="report-header">
          <p className="report-header-tag">Report Form</p>
        </div>
        <div className="report-body">
            {list.map(item => (
              <div key={item.id}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "50vw" }}>
                    {this.renderInput( item.head, item.label, item.inputs, item.type, this.handleChange )}
                    {item.id == 16 ? this.renderBtn("okay") : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    );
  }
}

export default Report;

import React, { Component } from "react";
import "../css/report.css";
import Form from "../component/report/form";

const list = [
  { id: 1, head: "name", label: "Name:", inputs: "Enter your name" },
  {
    id: 2,
    head: "phone",
    label: "Mobile No:",
    inputs: "Enter your mobile number",
    type: "number"
  },
  {
    id: 3,
    head: "email",
    label: "Email:",
    inputs: "Enter your email address",
    type: "email"
  },
  { id: 4, head: "address", label: "City:", inputs: "Enter your city name" },
  {
    id: 6,
    head: "productName",
    label: "Product Name:",
    inputs: "like paracetamol"
  },
  { id: 7, head: "brand", label: "Brand:", inputs: "Branded Generics" },
  { id: 8, head: "lot", label: "Lot No:", inputs: "123 Generics" },
  { id: 9, head: "strength", label: "Strength:", inputs: "strength" },
  { id: 10, head: "dose", label: "Dose:", inputs: "2 times per day" },
  { id: 11, head: "batch", label: "Batch No:", inputs: "786" },
  {
    id: 12,
    head: "otherInfo",
    label: "Other Info:",
    inputs:
      "Developing new medicines can take years and significant investment. "
  },
  {
    id: 13,
    head: "reactionType",
    label: "Reaction Type:",
    inputs: "Ige-mediated"
  },
  {
    id: 14,
    head: "reactionInfo",
    label: "Reaction Info:",
    inputs: "Anaphylaxis from β-lactam antibiotic"
  },
  {
    id: 15,
    head: "dataOccur",
    label: "Data Occur:",
    inputs: "Health-related information"
  },
  { id: 16, head: "timeOccur", label: "Time Occur:", inputs: "5 days" }
];

class Report extends Form {
  render() {
    return (
      <div className="report-container">
        <div className="report-header">
          <p className="report-header-tag">Report Form</p>
        </div>
        <div className="report-body">
          <div>
            {list.map(item => (
              <div key={item.id}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "50vw" }}>
                    {this.renderInput(
                      item.head,
                      item.label,
                      item.inputs,
                      item.type,
                      item.id
                    )}
                    {item.id === 16 ? this.renderBtn() : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Report;

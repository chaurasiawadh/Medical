import React, { Component } from "react";
import './complaint.css';
import Card from './card.js';

import firebase from "firebase/app";
import "firebase/firestore";

class complaintShow extends Component {
    constructor() {
        super();
        this.state = {
          data: []
        };
      }
    getTasks = () => {
        firebase
          .firestore()
          .collection("report")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.setState({
                data: [...this.state.data, doc.data()]
              });
            });
          });
      };
    
      componentDidMount() {
        this.getTasks();
      }
  render() {
      const data = this.state.data;
      
      console.log('data', data)
    return (
      <div className="complaint-container">
        <div className="complaint-header">
          <p className="complaint-header-tag">Complaint List</p>
        </div>
        <div className="complaint-card">
        {data.map(i=> <Card
        key={i.id}
        name={i.name}
        address={i.address}
        productName={i.productName}
        reactionInfo={i.reactionInfo}
        />)}
        </div>
      </div>
    );
  }
}

export default complaintShow;

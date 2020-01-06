import React, { Component } from "react";
import styles from "../style/reportDialogStyle";
import firebase from "firebase/app";
import "firebase/firestore";

class Dialog extends Component {
  post = data => {
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
    } = data;

    console.log('start')

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
      .then(alert("Post"))
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    const { visible, onClick, data } = this.props;

    const show = [
      { name: " Name", input: data.name },
      { name: "Phone", input: data.phone },
      { name: "Email", input: data.email },
      { name: "Address", input: data.address },
      { name: "Product Name", input: data.productName },
      { name: "Brand", input: data.brand },
      { name: "lot", input: data.lot },
      { name: "Strength", input: data.strength },
      { name: "Dose", input: data.dose },
      { name: "Batch", input: data.batch },
      { name: "Other Info", input: data.otherInfo },
      { name: "Reaction Type", input: data.reactionType },
      { name: "Reaction Info", input: data.reactionInfo },
      { name: "Date Occur", input: data.dataOccur },
      { name: "Time Occur", input: data.timeOccur }
    ];
    const container = {
      visibility: visible,
      position: "fixed",
      backgroundColor: "#FBF8F8",
      flexDirection: "column",
      borderRadius: 20
    };

    return (
      <div style={styles.main}>
        <div style={container}>
          <p style={styles.tag}>Report Confirmation</p>
          <div>
            {show.map(item => (
              <div>
                <div style={styles.labelDiv}>
                  <span style={styles.labelName}>{item.name} : </span>
                  <span style={styles.labeldata}>{item.input}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.btnDiv}>
            <button onClick={() => this.post(data)} style={styles.btn}>
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;

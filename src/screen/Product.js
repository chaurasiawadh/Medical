import React, { Component } from "react";
import "../css/Product.css";
import { Paracetamol } from "../component/strings";
import {med1, med2, med3, med4} from "../assets/url/imgUrl.js"
class Home extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div className="heeader">
          <p className="tag-Name">Paracetamol</p>
        </div>
        <div className="containerProduct">
          <div className="left">
            <img
              className="img-left"
              src={med1}
            />
          </div>
          <div className="right">
            <p className="deltails">{Paracetamol}</p>
          </div>
        </div>
        <div className="footer">
          <img
            className="img-foot"
            src={med2}
          />

          <img
            className="img-foot"
            src={med3}
          />

          <img
            className="img-foot"
            src={med4}
          />
        </div>
      </div>
    );
  }
}

export default Home;

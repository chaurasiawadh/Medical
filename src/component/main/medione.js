import React, { Component } from "react";
import "../../css/medione.css";
import { PHARMACO, Pharmacovigilance } from "./strings";
import { PHARMA, PHARMA_cal } from "../../assets/url/imgUrl";

class Medione extends Component {
  render() {
    return (
      <div className="medione-container">
        <div className="medione-flex">
          <div className="medione-left">
            <p className="medione-head">PHARMACO - VIGILANCE</p>
            <p className="medione-content">{PHARMACO}</p>
            <p className="medione-content">{Pharmacovigilance}</p>
          </div>
          <div className="medione-right">
            <img className="medione-img" src={PHARMA_cal} />
          </div>
        </div>
        <div className="medione-down">
          <img className="medione-down-img" src={PHARMA} />
        </div>
      </div>
    );
  }
}

export default Medione;

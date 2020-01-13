import React, { Component } from "react";
import "../../css/medione.css";
import { PHARMACO, Pharmacovigilance } from "./strings";
import { PHARMA, PHARMA_cal } from "../../assets/url/imgUrl";

class Medione extends Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection:"column", padding: 10}}>
        <div >
          <span className="title">Pharma Covigilance</span>
        </div>
        <div className="medione-body">
            <div className="medione-content-container">
              <span className="medione-content">{PHARMACO}</span>
              <span className="medione-content-container-img">{Pharmacovigilance}</span>
           </div >
            <div className="medione-content-container">
              <img className="medione-img" src={PHARMA_cal} />
            </div>
        </div>
        <div className="medione-footer" >
        <img className="medione-img" style={{width: 300}} src={PHARMA} />
        </div>
      </div>
    );
  }
}

export default Medione;

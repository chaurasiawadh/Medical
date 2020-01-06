import React, { Component } from "react";
import "../../css/meditwo.css";
import { PHARMACO, Pharmacovigilance } from "./strings";

class Medione extends Component {
  render() {
    return (
      <div className="meditwo-container">
        <div className="meditwo-flex">
          <div className="meditwo-left">
            <img className="meditwo-img" src={require("../../image/drug.svg")} />
          </div>
          <div className="meditwo-right">
            <p className="meditwo-head">
              Side effects (SE) Vs Adverse Drug Reaction Vs Adverse Event (AE)
            </p>
            <p className="meditwo-content">{PHARMACO}</p>
            <p className="meditwo-content">{Pharmacovigilance}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Medione;

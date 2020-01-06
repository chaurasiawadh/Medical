import React, { Component } from "react";
import "../css/Detail.css";

const heads =
  "A substance or preparation used in treating disease. a : the science and art dealing with the maintenance of health and the prevention, alleviation, or cure of disease. b : the branch of medicine concerned with the nonsurgical treatment of disease.";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      toggleMedShow: true,
      toggleShow: true
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleMedShow = this.toggleMedShow.bind(this);
  }
  toggleShow() {
    this.setState({ toggleShow: !this.state.toggleShow });
  }
  toggleMedShow() {
    this.setState({ toggleMedShow: !this.state.toggleMedShow });
  }
  render() {
    const detail = this.state.toggleShow ? null : (
      <div>
        <p>
          Benzodiazepines, sometimes called "benzos", are a class of
          psychoactive drugs whose core chemical structure is the fusion of a
          benzene ring and a diazepine ring
        </p>
        {/* <button onClick={this.toggleShow}> Show Less </button> */}
      </div>
    );

    const det = this.state.toggleMedShow ? null : (
      <div>
        <p>
          Allergic reactions are the hyper-immune response of our immune system
          to foreign (antigenic) substances. When certain foreign substances are
          introduced to the body, the immune system is triggered. (The immune
          system protects us from substances that may harm the body.) A
          hyper-immune response may result in allergic reaction symptoms.
          Medications are foreign substances and some of their components may
          trigger the immune systems of some people.
        </p>
        {/* <button onClick={this.toggleShow}> Show Less </button> */}
      </div>
    );
    return (
      <div className="app">
        <div className="header">
          <h1>Header</h1>
        </div>
        <div>
          <p>{heads}</p>
        </div>
        <div className="container">
          <div className="first">
            <div className="vl"></div>
          </div>
          <div className="second">
            <div className="secondContainer">
              <div>
                <p className="medName" onClick={this.toggleShow}>
                  Benzodiazepine
                </p>
              </div>
              <div className="medDetail">{detail}</div>
            </div>

            <div className="secondContainer">
              <div>
                <p className="medName" onClick={this.toggleMedShow}>
                  Drug Allergy{" "}
                </p>
              </div>
              <div className="medDetail">{det}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

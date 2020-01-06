import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../css/scroll.css";

class scroll extends Component {
  styles = { height: "200px", width: "200px" };
  render() {
    return (
      <div className="main">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={500}
          interval={2500}
          swipeable={true}
          emulateTouch={true}
          centerSlidePercentage={70}
          className="scroll-bg"
        >
          <div className="scroll-div">
            <p className="scroll-head">Paracetamol-1</p>
            <hr />
            <p className="scroll-detail">
              Paracetamol is a pain reliever and a fever reducer. The exact
              mechanism of action of is not known. Paracetamol is used to treat
              many conditions such as headache, muscle aches, arthritis,
              backache, toothaches, colds, and fevers.
            </p>
          </div>

          <div className="scroll-div">
            {/* <img src={med1} style={this.styles}/> */}
            <p className="scroll-head">Paracetamol-2</p>
            <hr />
            <p className="scroll-detail">
              Paracetamol is a pain reliever and a fever reducer. The exact
              mechanism of action of is not known. Paracetamol is used to treat
              many conditions such as headache, muscle aches, arthritis,
              backache, toothaches, colds, and fevers.
            </p>
          </div>

          <div className="scroll-div">
            {/* <img src={med1} style={this.styles}/> */}
            <p className="scroll-head">Paracetamol-3</p>
            <hr />
            <p className="scroll-detail">
              Paracetamol is a pain reliever and a fever reducer. The exact
              mechanism of action of is not known. Paracetamol is used to treat
              many conditions such as headache, muscle aches, arthritis,
              backache, toothaches, colds, and fevers.
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default scroll;

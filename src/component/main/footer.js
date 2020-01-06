import React, { Component } from "react";
import { IoLogoFacebook, IoLogoFlickr, IoLogoInstagram } from "react-icons/io";
class Footer extends Component {
  render() {
    return (
      <div className="bg-dark p-2">
        <span
          style={{ fontSize: 20, color: "#fff" }}
        >
          Medi Pharma&copy; 2020
        </span>
        <hr />
        <div>
          <IoLogoFacebook color="white" size="30" />
          <IoLogoFlickr color="white" size="30" />
          <IoLogoInstagram color="white" size="30" />
        </div>
      </div>
    );
  }
}

export default Footer;

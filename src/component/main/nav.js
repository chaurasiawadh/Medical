import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="header-left">
          <img
            className="logo"
            src="https://image.flaticon.com/icons/svg/119/119077.svg"
          />
          <p className="logo-Name">Hospital</p>
        </div>
        <div className="header-right">
          <div onPress={this.props.handleShowDetails}>
            <p className="right-Name">
              <Link className="right-name-link" to="/">
                Home
              </Link>
            </p>
          </div>
          
          <div className="home-dropdown">
            <p className="home-btn-dropdown">
              <Link className="right-name-link" to="/product">
                Product
              </Link>
            </p>
            <div className="home-dropdown-content">
              <a href="#">Game</a>
              <a href="#">Sport</a>
              <a href="#">Cricket</a>
              <a href="#">Football</a>
              <a href="#">Hokey</a>
              <a href="#">Electronic</a>
            </div>
          </div>

          <div className="home-dropdown">
            <p className="home-btn-dropdown">About</p>
            <div className="home-dropdown-content">
              <a href="#">Game</a>
              <a href="#">Sport</a>
              <a href="#">Cricket</a>
              <a href="#">Football</a>
              <a href="#">Hokey</a>
              <a href="#">Electronic</a>
            </div>
          </div>

          <div className="user-dropdown">
            <img
              className="user-img"
              src="https://image.flaticon.com/icons/svg/149/149071.svg"
            />
            <div class="user-dropdown-content">
              <div>
                <img
                  className="user-pic-dropdown"
                  src="https://image.flaticon.com/icons/svg/145/145867.svg"
                />
                <p className="user-name-show">UserName</p>
              </div>
              <div className="logout-div">
                <p className="logout-btn">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

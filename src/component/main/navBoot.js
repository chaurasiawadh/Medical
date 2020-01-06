import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../../css/navBoot.css';

class NavBoot extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <FaStethoscope className="m-2" />
          Medi Pharma
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link to="/complaint">Complaint</Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link to="/report">Report</Link>
          </Nav.Link> 
          {/* <Nav.Link href="#pricing" className="login">
            <Link to="/about">login</Link>
          </Nav.Link> */}
        </Nav>
        
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
      </Navbar>
    );
  }
}

export default NavBoot;

import React, { Component } from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import Scroll from "../component/main/scroll";
import Medione from "../component/main/medione";
import Meditwo from "../component/main/meditwo";
import Footer from "../component/main/footer";
import { FaSearch, FaBookMedical, FaUserInjured } from "react-icons/fa";

class Home extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div className="body-container">
          <div className="search">
            <FaSearch style={{ margin: 10 }} />
            <input placeholder="Enter the Medicine here..." />
          </div>

          <div className="menu-section">
            <div className="btn btn-lg btn-info m-2">
              <FaBookMedical />
              <Link to="/report" style={{ color: "#fff", marginLeft: 10 }}>
                Report
              </Link>
            </div>
            <div className="btn btn-lg btn-danger m-2">
              <FaUserInjured />
              <Link to="/complaint" style={{ color: "#fff", marginLeft: 10 }}>
                List of complaint
              </Link>
            </div>
          </div>
        </div>
        <Medione />
        <Meditwo />
        <Scroll />
        <Footer />
      </div>
    );
  }
}

export default Home;

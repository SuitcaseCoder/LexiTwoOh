import React, { Component } from "react";
// import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <header>
        <img
          src={require("../Assets/logo.png")}
          style={{ height: "40px" }}
          alt="logo"
        ></img>
        <nav className="nav">
          {/* both of these will change to links using Browser Router */}
          <a href="#">Alle</a> | <a href="#">Neue</a>
        </nav>
      </header>
    );
  }
}

// Header.propTypes = {

// };

export default Header;

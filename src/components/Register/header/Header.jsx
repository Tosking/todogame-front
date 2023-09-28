import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="header__inner container">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      </header>
    );
  }
}

export default Header;

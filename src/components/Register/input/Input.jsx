import React, { Component } from "react";
import './Input.css'

class Input extends Component {
  state = {};
  render() {
    return <input type="text" className={this.props.className} placeholder={this.props.placeholder}/>;
  }
}

export default Input;

import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  handleClick() {
    console.log("hi");
  }
  render() {
    return (
      <button
        className={this.props.class}
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.value}
      </button>
    );
  }
}

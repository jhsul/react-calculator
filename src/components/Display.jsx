import React from "react";
import "./Display.css";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return <div className="display">{this.state.value}</div>;
  }
}

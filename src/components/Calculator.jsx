import React from "react";
import Button from "./Button";
import Display from "./Display";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.displayElement = React.createRef();
    this.prevNumber = null;
    this.prevOperation = null;
    this.curNumber = "";
  }
  handleButtonPress(i) {
    if (!isNaN(i)) {
      this.curNumber = this.curNumber.concat(i);
    } else if (["+", "-", "*", "/"].includes(i)) {
      this.applyLastOperation();
      this.prevNumber = this.curNumber;
      this.prevOperation = i;
      this.curNumber = "";
    } else if (i === "+/-") {
      this.curNumber = (parseFloat(this.curNumber) * -1).toString();
    } else if (i === ".") {
      if (!this.curNumber.includes(".")) {
        this.curNumber = this.curNumber.concat(".");
      }
    } else if (i === "del") {
      this.curNumber = this.curNumber.substring(0, this.curNumber.length - 1);
    } else if (i === "C") {
      this.curNumber = "";
      this.prevOperation = null;
      this.prevNumber = null;
    } else if (i === "=") {
      this.applyLastOperation();
    }
    this.displayElement.current.setState({ value: this.curNumber });
  }
  applyLastOperation() {
    if (this.prevNumber === null || this.prevOperation === null) {
      return;
    }
    switch (this.prevOperation) {
      case "+":
        this.curNumber = (
          parseFloat(this.prevNumber) + parseFloat(this.curNumber)
        ).toString();
        break;
      case "-":
        this.curNumber = (
          parseFloat(this.prevNumber) - parseFloat(this.curNumber)
        ).toString();
        break;
      case "*":
        this.curNumber = (
          parseFloat(this.prevNumber) * parseFloat(this.curNumber)
        ).toString();
        break;
      case "/":
        this.curNumber = (
          parseFloat(this.prevNumber) / parseFloat(this.curNumber)
        ).toString();
        break;
      default:
        return;
    }
    this.prevNumber = null;
    this.prevOperation = null;
  }
  render() {
    return (
      <div>
        <div>
          <Display ref={this.displayElement} />
        </div>
        <div>
          <Button class="digit" value={"1"} onClick={this.handleButtonPress} />
          <Button class="digit" value={"2"} onClick={this.handleButtonPress} />
          <Button class="digit" value={"3"} onClick={this.handleButtonPress} />
          <Button
            class="action"
            value={"del"}
            onClick={this.handleButtonPress}
          />
          <Button class="action" value={"C"} onClick={this.handleButtonPress} />
        </div>
        <div>
          <Button class="digit" value={"4"} onClick={this.handleButtonPress} />
          <Button class="digit" value={"5"} onClick={this.handleButtonPress} />
          <Button class="digit" value={"6"} onClick={this.handleButtonPress} />
          <Button
            class="operation"
            value={"+"}
            onClick={this.handleButtonPress}
          />
          <Button
            class="operation"
            value={"-"}
            onClick={this.handleButtonPress}
          />
        </div>
        <div>
          <Button class="digit" value={"7"} onClick={this.handleButtonPress} />
          <Button class="digit" value={"8"} onClick={this.handleButtonPress} />
          <Button class="digit" value={"9"} onClick={this.handleButtonPress} />
          <Button
            class="operation"
            value={"*"}
            onClick={this.handleButtonPress}
          />
          <Button
            class="operation"
            value={"/"}
            onClick={this.handleButtonPress}
          />
        </div>
        <div>
          <Button
            class="digit"
            value={"+/-"}
            onClick={this.handleButtonPress}
          />
          <Button class="digit" value={"0"} onClick={this.handleButtonPress} />
          <Button class="digit" value={"."} onClick={this.handleButtonPress} />
          <Button class="equals" value={"="} onClick={this.handleButtonPress} />
        </div>
      </div>
    );
  }
}

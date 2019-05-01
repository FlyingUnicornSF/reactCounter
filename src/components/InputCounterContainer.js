import React, { Component } from 'react';
import { Button } from "./Bottons";
import InputNumDisplay from './Display';

class InputCounterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0,
    }
    this.nothing = this.nothing.bind(this);
    this.mathSetSate = this.mathSetSate.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentdidupdate, this.props, prevProps", this.props, prevProps, this.state, prevState);
    if (this.state === prevState) {
      this.nothing();
    }
  }
  nothing= () => {
    console.log("OMG please stop doing things.");
  }

  mathSetSate = operator => {
    switch (operator) {
      case "add":
      this.setState((state, props)=>{
        return {num: parseInt(this.state.num) + parseInt(1)}
      });
      break;
      case "subtract":
      this.setState((state, props)=>{
        return {num: parseInt(this.state.num) - 1}
      });
      break;
      // TODO: add multiply and divide n' such
      default:
      console.log('what the heck did you do to here??');
    }
  }
    onButtonClick = event => {
      console.log(event.target.value);
      let operator = event.target.value;
      this.mathSetSate(operator);
    }
    // this method is getting passed to the child component as a prop
    handleInputChange = number => {
      console.log('here?', parseInt(number))
      this.setState({num: parseInt(number)})
    }
    render = () =>{
      return(
        <div className="input-counter-container">
          <Button onClick={this.onButtonClick} tag="foo" value="add" />
          <Button onClick={this.onButtonClick} tag="foo" value="subtract" />
          <p>container's this.state.number {this.state.num}</p>
          {/* <InputNumDisplay type="number" value={this.state.num} /> */}
          <InputNumDisplay type="number" value={this.state.num} onInputChange={this.handleInputChange} />
          {/* <InputNumDisplay type="text" value={this.state.letter} onInputChange={this.handleInputChange} /> */}
          <hr></hr>
        </div>
      );
    }
}
export default InputCounterContainer;
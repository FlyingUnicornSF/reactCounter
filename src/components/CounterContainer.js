import React, { Component } from 'react';
import { Button } from "./Bottons";
import { NumDisplay } from "./Display";

class CounterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
    this.nothing = this.nothing.bind(this);
    this.math = this.math.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentdidupdate, this.props, prevProps", this.props, prevProps, this.state, prevState);
    if (this.state === prevState) {
      this.nothing();
    }
  }
  nothing(){
    console.log("OMG please stop doing things.");
  }
  math(operator){
    switch (operator) {
      case "add":
      this.setState((state, props)=>{
        return {num: state.num + 1}
      });
      break;
      case "subtract":
      this.setState((state, props)=>{
        return {num: state.num - 1}
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
      this.math(operator);
    };

    render(){
      return(
        <div className="counter-container">
          <Button onClick={this.onButtonClick} tag="foo" value="add"></Button>
          <Button onClick={this.onButtonClick} tag="foo" value="subtract"></Button>
          <NumDisplay id={this.props.id} name={this.props.name}>{this.state.num}</NumDisplay>
          <hr></hr>
        </div>
      );
    }
}
export default CounterContainer;
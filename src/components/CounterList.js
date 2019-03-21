import React, { Component } from 'react';
import { Button } from "./Bottons";
import CounterContainer from "./CounterContainer";

class CounterList extends Component {
  constructor(props){
    super(props);
    this.state = {
      counters: [],
    }
    this.counterRefs = [];
    this.removeButtonClick =  this.removeButtonClick.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  removeButtonClick = event => {
    let counterArray = this.state.counters;
    for(let i = 0; i < counterArray.length; i += 1){
      if(counterArray[i]["key"] === event.target.getAttribute('tag')) {
        // TODO: maybe use filter? 
        this.counterRefs.splice(i, 1);
        counterArray.splice(i, 1);
        this.setState({counters: counterArray});
        break;
      }
    }
  }
  onButtonClick = event => {
    console.log(event.target.value);
    let operator = event.target.value;
    switch (operator) {
      case "addCounter":
        let newRef = React.createRef();
        let id = Math.floor(Math.random()*1000);
        let newCounter = (<div key={id}><Button tag={id} onClick={this.removeButtonClick} value="remove this counter"/><CounterContainer name={id} ref={ newRef }/> </div>)
        this.setState({counters: [...this.state.counters, newCounter]})
        this.counterRefs.push(newRef);
      break;
      case "add":
        this.counterRefs.forEach(ref => {
          ref.current.onButtonClick(event);
        })
      break;
      case "subtract":
        this.counterRefs.forEach(ref => {
            ref.current.onButtonClick(event);
        })
      break;
      default:
      console.log('what the heck did you do to get here??');
    }
    event.preventDefault();
  };

  render(){
    console.log("i'm in render", this.state.counters)
      return(
          <div className="counter-list">
            <Button onClick={this.onButtonClick} tag="foo" value="addCounter">add Counter</Button>
            <Button onClick={this.onButtonClick} tag="foo" value="add">add one to ALL </Button>
            <Button onClick={this.onButtonClick} tag="foo" value="subtract">subtract one from All</Button>
            <hr></hr>
            <div>{this.state.counters}</div>
          </div>
      )
  }
}
export default CounterList;
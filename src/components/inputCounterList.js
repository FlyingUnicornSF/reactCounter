import React, { Component } from 'react';
import { Button } from "./Bottons";
import InputCounterContainer from "./InputCounterContainer";

class InputCounterList extends Component {
  constructor(props){
    super(props);
    this.state = {
        counters: [],
        boo: null
    }
  }
  onButtonClick = (event) => {
    console.log("inputCounterList onButtonClick")
    console.log(event.target.value);
    let operator = event.target.value;
    if( operator === "AddCounter") {
      let id = Math.floor(Math.random()*1000);
      let newCounter = (<div key={id}><Button tag={id} onClick={this.removeButtonClick} value="remove this counter"/><InputCounterContainer name={id}/> </div>)
      this.setState({counters: [...this.state.counters, newCounter]});  
    } else if( operator === "add" ){
      
    }
  }
  render = () => {
    console.log("state of the counter list", this.state.counters)
      return (
          <div className="input-counter-list" style={{ backgroundColor: 'aliceblue', width: '50%', border: '1px solid darkslateblue', margin: 'auto' }}>
              <Button onClick={this.onButtonClick} text="Add input counter" value="AddCounter"/>
              <Button onClick={this.onButtonClick} text="Add to ALL Counter" value="add"/>
              <Button onClick={this.onButtonClick} text="Subtract ALL Counter" value="subtract"></Button>
              <hr></hr>
              <div>{this.state.counters}</div>
          </div>
      )
  }
}

export default InputCounterList;
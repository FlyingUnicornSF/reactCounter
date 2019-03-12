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
    }
    
    onButtonClick = event => {
      console.log(event.target.value);
      let operator = event.target.value;
      switch (operator) {
        case "addCounter":
          let newRef = React.createRef();
          let id = this.state.counters.length + 1;
          let newCounter = <CounterContainer key={id} ref={ newRef }/>
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
        return(
            <div className="counter-list">
              <Button onClick={this.onButtonClick} tag="foo" value="addCounter">add Counter</Button>
              <Button onClick={this.onButtonClick} tag="foo" value="add">add one to ALL </Button>
              <Button onClick={this.onButtonClick} tag="foo" value="subtract">subtract one from All</Button>
              <hr></hr>
              {this.state.counters}
            </div>
        )
    }
}
export default CounterList;
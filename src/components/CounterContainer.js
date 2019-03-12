import React, { Component } from 'react';
import { Button } from "./Bottons";
import Number from "./Number"

class CounterContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        num: null
      }
    }
    componentDidUpdate(prevProps, prevState) {
      console.log("componentdidupdate, this.props, prevProps", this.props, prevProps);
      if(this.props !== prevProps){
          console.log("OMG")
      }
   }
    onButtonClick = event => {
      console.log(event.target.value);
      let operator = event.target.value;
      switch (operator) {
        case "add":
        this.setState({num: 1});
        break;
        case "subtract":
        this.setState({num: -1});
        break;
        default:
        console.log('what the heck did you do to here??');
      }
    };

    render(){
        return(
            <div className="counter-container">
              <Button onClick={this.onButtonClick} tag="foo" value="add"><p>these things in btwn the are handled as "prop.children"</p></Button>
              <Button onClick={this.onButtonClick} tag="foo" value="subtract"></Button>
              <Number id={this.props.id} num={this.state.num}/>
              <Button onClick={this.onButtonClick} tag="foo" value="remove"></Button>
              <hr></hr>
            </div>
        )
    }
}
export default CounterContainer;
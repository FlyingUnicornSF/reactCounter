import React, { Component } from 'react';

class Number extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("componentdidupdate, this.props, prevProps this.state prevState", this.props, prevProps, this.state, prevState);
    if(this.state.counter !== prevState.counter + this.props.num){
      this.math();
    }
  }
  math(){
    //TODO: be able to do more than add. like multiply etc
    this.setState((state, props) => {
      return {counter: state.counter + props.num};
    });
  }
      // <pre>
      //   { JSON.stringify(this.props, null, 2) }
      // </pre>
  render(){
      return(
      <div id={this.props.id}>
        <p> num { this.state.counter } </p>
      </div>
      )
  }
}
export default Number;
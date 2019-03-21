import React, { Component } from 'react';

class InputNumDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("InputNumDisplay, this.props, prevProps this.state prevState", this.props, prevProps, this.state, prevState);
    if (this.props !== prevProps ) {
      this.setState({num: this.state.num + (this.props.value - prevProps.value)});
    }
  }
  handleChange(event) {
    if(!event.target.value){
      this.setState({num: 0});
    } else {
      this.setState({num: parseInt(event.target.value)});
    }
  }
  
  // <pre>
  //   { JSON.stringify(this.props, null, 2) }
  // </pre>
  render(){
    
    return(
      <div id={this.props.id}>
        <p>Input num { this.state.num }</p>
        <input value={ this.state.num } onChange={this.handleChange}></input>
      </div>
    )
  }
}
export default InputNumDisplay;
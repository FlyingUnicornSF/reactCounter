import React, { Component } from 'react';
class InputNumDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("InputNumDisplay, this.props, prevProps this.state prevState", this.props, prevProps, this.state, prevState);
    if (this.props !== prevProps ) {
      this.setState({num: this.state.num + (this.props.value - prevProps.value)});
    }
  }
  // now onInputChange which is a function is being passed from parent component. 
  // call this method in props from this child component.
  handleChange = event => {
    if(!event.target.value){
      // this.setState({num: 0}); <- this need to chanve to lift up the state.
      this.props.onInputChange(0);
    } else {
      //this.setState({num: parseInt(event.target.value)}); <- this need to chanve to lift up the state.
      this.props.onInputChange(event.target.value);
    }
  }
  
  // <pre>
  //   { JSON.stringify(this.props, null, 2) }
  // </pre>
  render = () => {
    // const number = this.state.num;  <- this need to chanve to lift up the state.
    const number = this.props.value;
    // const letter = this.props.letter;
    return(
      <div class="input-num-deplay" id={this.props.id}>
        <p>state in InputNumDisplay { number }</p>
        <input value={ number } onChange={this.handleChange}/>
        {/* <input value={ letter } onChange={this.handleChange}/> */}
      </div>
    )
  }
}
export default InputNumDisplay;
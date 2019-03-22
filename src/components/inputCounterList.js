import React, { Component } from 'react';
import { Button } from "./Bottons";
import InputCounterContainer from "./InputCounterContainer";

class InputCounterList extends Component {
  constructor(props){
    super(props);
    this.state = {
        foo: null,
        boo: null
    }
  }
  func = () => {

  }
  render = () => {
      return (
          <div>
              <Button value="Add input Counter"/>
              <Button value="Remove input Counter"/>
          </div>
      )
  }
}

export default InputCounterList;
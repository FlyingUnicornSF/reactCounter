import React, { Component } from 'react';
import './App.css';
import CounterContainer from './components/CounterContainer';
import InputCounterContainer from './components/InputCounterContainer';
import CounterList from './components/CounterList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          HEADERRRR
        </header>
        <InputCounterContainer/> 
        <CounterContainer/>
        <CounterList />
      </div>
    );
  }
}

export default App;

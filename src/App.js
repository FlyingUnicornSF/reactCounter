import React, { Component } from 'react';
import './App.css';
import CounterContainer from './components/CounterContainer';
import InputCounterContainer from './components/InputCounterContainer';
import CounterList from './components/CounterList';
import InputCounterList from './components/inputCounterList';
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
        <InputCounterList />
      </div>
    );
  }
}

export default App;

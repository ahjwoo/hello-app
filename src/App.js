import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardWrapper from './Boardwrapper';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello App</h2>
        <BoardWrapper/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardWrapper from './Boardwrapper';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Hello App</h2>
        <div className="App">
        <BoardWrapper/>
        </div>
      </div>
    );
  }
}

export default App;

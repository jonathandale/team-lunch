import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header bg-orange text-white">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title text-4xl">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

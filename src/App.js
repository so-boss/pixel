// src/App.js
import * as React from 'react';
import { Component } from 'react';
// import * as logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {mainContent: null};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

}

export default App;

import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Solstie DTR</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import Summary from './Summary';
import logo from '../images/logo.svg';
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">"Solstice - Making Pairing Fun Again"</h1>
        </header>
        {true === false ? this.renderSummary() : this.renderQuestionnaire()}
      </div>
    );
  }

  renderQuestionnaire() {
    return (
      <Questionnaire/>
    );
  }

  renderSummary() {
    return (
      <Summary/>
    );
  }
}

export default App;
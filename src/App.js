import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise from './components/Exercise'

class App extends Component {
  constructor() {
    super()

    this.state = {
      arms: [0]
    }
  }

  componentDidMount() {
    fetch('https://wger.de/api/v2/exercise/?muscles=1&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      arms: res["results"]
    }))


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Exercise exercise={this.state.arms[Math.floor(Math.random()*this.state.arms.length)]}/>
      </div>
    );
  }
}

export default App;

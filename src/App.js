import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise from './components/Exercise'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'

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
      <div>
        <NavBar color='black' title="FitWit"/>
        <Welcome />
        <Exercise exercise={this.state.arms[Math.floor(Math.random()*this.state.arms.length)]}/>
      </div>
    );
  }
}

export default App;

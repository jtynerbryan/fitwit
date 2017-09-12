import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise from './components/Exercise'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import PlanForm from './components/PlanForm'
import WorkoutContainer from './components/WorkoutContainer'
import {Link, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state = {
      biceps: [0],
      back: [0],
      shoulder: [0],
      abs: [0],
      chest: [0],
      triceps: [0],
      legs: [0],
      calves: [0],
      plan: null,
      exercises: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(res => console.log(res))

    fetch('https://wger.de/api/v2/exercise/?muscles=1&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      biceps: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=9&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      back: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=2&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      shoulder: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=6&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      abs: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=4&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      chest: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=5&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      triceps: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=10&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      legs: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=7&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.setState({
      calves: res["results"]
    }))

  }

  setPlanObject = (obj) => {
    this.setState({
      plan: obj
    })
    this.createPlan(obj)
  }

  createPlan = (obj) => {
    const addToExercises = Object.entries(obj).filter(item => item[1] === true).map(item => item[0].split('And'))
    addToExercises.forEach(item => item.forEach(ele => this.state.exercises.push(this.state[ele.toLowerCase()])))
  }

  render() {
    return (
      <div>
        <NavBar color='black' title="FitWit"/>
        {this.state.plan == null ? <PlanForm setPlanObject={this.setPlanObject}/> : <WorkoutContainer exercises={this.state.exercises} plan={this.state.plan}/>}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise from './components/Exercise'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import PlanForm from './components/PlanForm'
import WorkoutContainer from './components/WorkoutContainer'
import {Link, Route} from 'react-router-dom'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Auth from './adapters/auth'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: "",
      isLoggedIn: localStorage.getItem("jwt") ? true : false,
      jwt: localStorage.getItem("jwt"),
      biceps: [0],
      back: [0],
      shoulder: [0],
      abs: [0],
      chest: [0],
      triceps: [0],
      legs: [0],
      calves: [0],
      plan: null,
      exercises: [],
      daysAWeek: null,
      programLength: null
    }
  }

  onUserLogin = (user) => {
    localStorage.setItem('token', user.jwt)
    this.setState({
      currentUser: user,
      isLoggedIn: true
    })
  }

  signupUser = (user) => {
    localStorage.setItem('token', user.jwt)
    this.setState({
      currentUser: user,
      isLoggedIn: true
    })
  }

  logout = () => {
    console.log(this)
    Auth.logOut()
    this.setState({
      currentUser: {}
    })
  }

  shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a
  }

  getUserExercises(){
  const usernameJSON = JSON.stringify({username: this.props.username})
    return fetch(`http://localhost:3001/api/v1/exercises/${this.state.currentUser.id}`, {
      method: 'get',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(res => res.json())
    .then(res => this.setState({
      exercises: res.exercises
    }))
  }
  // .then(res => this.setState({exercises: res.exercises}))

  componentDidMount() {
    if (this.state.currentUser === ""){
      const token = JSON.stringify({token: localStorage["token"]})
      fetch('http://localhost:3001/current_user', {
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        method: 'post',
        body: token
      })
      .then( res => res.json() )
      .then( data => this.setState({
        currentUser: data
      }, this.getUserExercises ))

    } else {
      console.log("current user is this", this.state.currentUser)
    }

    fetch('https://wger.de/api/v2/exercise/?muscles=1&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      biceps: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=9&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      back: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=2&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      shoulder: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=6&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      abs: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=4&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      chest: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=5&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      triceps: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=10&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      legs: res["results"]
    }))

    fetch('https://wger.de/api/v2/exercise/?muscles=7&license_author=wger.de&language=2')
    .then(res => res.json())
    .then(res => this.shuffle(res))
    .then(res => this.setState({
      calves: res["results"]
    }))

  }

  setPlanObject = (obj) => {
    const userJSON = JSON.stringify(obj)
    console.log("plan object", this.state.currentUser)

    fetch(`http://localhost:3001/api/v1/users/${this.state.currentUser.id}`,{
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      method: 'PATCH',
      body: userJSON
    }).then( res => res.json() )
    .then( data => console.log(data) )

    this.setState({
      plan: obj
    }, () => console.log("i set the plan!", obj))
    this.createPlan(obj)
  }

  createPlan = (obj) => {
    const addToExercises = Object.entries(obj).filter(item => item[1] === true).map(item => item[0].split('And'))
    addToExercises.forEach(item => item.forEach(ele => this.state.exercises.push(this.state[ele.toLowerCase()])))

    this.state.exercises.map(muscleGroup => muscleGroup.map(exercise => {
      const exerciseJSON = JSON.stringify({name: exercise.name, description: exercise.description, username: this.state.currentUser.username})
      return fetch('http://localhost:3001/api/v1/exercises',{
        method: 'post',
        body: exerciseJSON,
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
      })
    }))
  }

  static signup = (userParams) => {
    const userJSON = JSON.stringify(userParams)
    return fetch('http://localhost:3001/api/v1/signup',{
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then(res => res.json())
  }

  render() {
    console.log("exercises ??", this.state.exercises)

      return (
        <div>
          <Route path="/" render={(props) => <NavBar color='black' title="FitWit" logout={this.logout} {...props}/> } />
          <Route path="/login" render={(props) => <LoginForm login={this.onUserLogin} {...props} />} />
          <Route path="/welcome" render={(props) => {
            const returnComponent = this.state.exercises.length === 0 ? <PlanForm setPlanObject={this.setPlanObject} {...props}/> : <WorkoutContainer exercises={this.state.exercises} user={this.state.currentUser} {...props} />
            return returnComponent
          }}/>
          <Route path="/signup" render={(props) => <SignupForm signup={this.signupUser} {...props} />} />
        </div>
      );

  }
}

export default App;

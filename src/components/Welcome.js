import React from 'react'
import WorkoutContainer from './WorkoutContainer'
import Auth from '../adapters/auth'

class Welcome extends React.Component {

  logout = () => {
    Auth.logOut()
    this.props.history.push('/login')
  }

  render() {
    return(
      <div>
        <h1>Welcome to FitWit</h1>
        <h4>blah blah blah</h4>
        <button onClick={this.logout}>Logout</button>

      </div>
    )
  }
}

export default Welcome

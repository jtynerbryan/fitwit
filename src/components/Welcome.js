import React from 'react'
import SignupForm from './SignupForm'

class Welcome extends React.Component {
  constructor(){
    super()

    this.state={
      name: '',
      password: '',
      email: ''
    }
  }

  handleSignup = (obj) => {
    this.setState({
      name: obj.name,
      password: obj.password,
      email: obj.email
    })
  }

  render(){
    return(
      <div>
        <h1>Welcome to FitWit</h1>
        <h4>blah blah blah</h4>
        <SignupForm signup={this.handleSignup} />
      </div>
    )
  }
}

export default Welcome

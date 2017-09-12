import React from 'react'
import Auth from '../adapters/auth'

class SignupForm extends React.Component{
  constructor(){
    super()
    this.state={
      username: '',
      password: '',
      name: ''
    }
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()

    const userParams = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name
    }

    Auth.signup(userParams)
      .then((user) => {
        this.setState({
          username: "",
          password: "",
          name: ""
        })
        localStorage.setItem("token", user.jwt)
        this.props.history.replace("/welcome")
      })
  }


  render(){
    return(
      <div>
        <h1>Fitwit Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type='text' name='name' onChange={this.changeName} value={this.state.name}/><br/>
          <label>Username: </label>
          <input type='text' name='username' onChange={this.changeUsername} value={this.state.username}/><br/>
          <label>Password: </label>
          <input type='password' name='password' onChange={this.changePassword} value={this.state.password}/><br/>         
          <input type='submit' name='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}


export default SignupForm

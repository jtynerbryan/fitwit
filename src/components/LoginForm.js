import React from 'react'
import Auth from '../adapters/auth'

class LoginForm extends React.Component{
  constructor(){
    super()
    this.state={
      username: '',
      password: '',
      error: ''
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


  handleSubmit = (e) => {
    e.preventDefault()

    const userParams = {
      username: this.state.username,
      password: this.state.password
    }

    Auth.login(userParams)
      .then(json => {

        if (json.message) {
          this.setState({
            error: json.message
          })
        } else {
          console.log(this)
          this.props.login(json)
          this.props.history.replace("/welcome")
        }
      })
      this.setState({
        username: "",
        password: ""
      })
  }


  render(){
    return(
      <div>
        <h1>Fitwit Login</h1>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleSubmit}>
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


export default LoginForm

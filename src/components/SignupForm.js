import React from 'react'

class SignupForm extends React.Component{
  constructor(){
    super()
    this.state={}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signup(e.target.value)
  }


  render(){
    return(
      <div>
        <form onClick={this.handleSubmit}>
          <label>Username: </label>
          <input type='text' name='username'/><br/>
          <label>Password: </label>
          <input type='text' name='password'/><br/>
          <label>Email: </label>
          <input type='text' name='email'/><br/>
          <input type='submit' name='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}


export default SignupForm

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClickHome = (e) => {
    this.props.history.push('/welcome')
  }

  handleClickSignup = (e) => {
    this.props.history.push('/signup')
  }

  handleClickLogin = (e) => {
    this.props.history.push('/login')
  }

  logout = () => {
    this.props.history.push('/login')
    this.props.logout()
  }

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu color={color} inverted >
          <Menu.Item name='FitWit' onClick={this.handleClickHome}/>
          { localStorage.getItem('token') ? <Menu.Menu position='right'><Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.logout}/></Menu.Menu> : <Menu.Menu position='right'><Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleClickSignup} /> <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleClickLogin} /></Menu.Menu> }
      </Menu>
    )
  }
}

export default NavBar

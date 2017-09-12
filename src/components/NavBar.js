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
  
  static propTypes = {
    color: PropTypes.string,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu color={color} inverted widths={12} >
        <Menu.Menu />
          <Menu.Item name='FitWit' onClick={this.handleItemClick}/>
        <Menu.Menu position='right'/>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.props.logout} />
      </Menu>
    )
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = <NavBar color='grey' />

  return <div>{menus}</div>
}

export default NavBar

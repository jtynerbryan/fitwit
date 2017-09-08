import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]

class ExampleMenu extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu color={color} inverted widths={12} >
        <Menu.Menu />
          <Menu.Item name='FitWit' onClick={this.handleItemClick}/>
        <Menu.Menu position='right'/>
          <Menu.Item name='login' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='signup' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = <ExampleMenu color='grey' />

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus

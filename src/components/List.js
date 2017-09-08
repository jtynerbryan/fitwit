import React from 'react'
import { List } from 'semantic-ui-react'
import Exercise from './Exercise'

const ListSessions = (props) => (
  <List celled ordered>
    <List.Item><Exercise exercise={props.exercise}/></List.Item>
  </List>
)

export default ListSessions
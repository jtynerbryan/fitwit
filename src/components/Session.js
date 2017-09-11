import React from 'react'
import { List } from 'semantic-ui-react'
import Exercise from './Exercise'

const Session = (props) => {
  return (
    <div>
      <h2>Session {props.session}</h2>
      <Exercise exercise={props.exercise} />
    </div>
  )
}

export default Session

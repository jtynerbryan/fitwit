import React from 'react'
import Exercise from './Exercise'

const Session = (props) => {

  return (
    <div>
      <h2>Session {props.session}</h2>
      {props.exercises.map(e => <Exercise exercise={e} />)}
    </div>
  )
}

export default Session

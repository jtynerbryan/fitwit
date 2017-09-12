import React from 'react'
import Exercise from './Exercise'

const Session = (props) => {

  const randomExercises = (ar) => {
    let array = ar.sort(() => 0.5 - Math.random())
    return [array[0], array[1], array[2], array[3]]
  }

  return (
    <div>
      <h2>Session {props.session}</h2>
      {randomExercises(props.exercises).map(e => <Exercise exercise={e} />)}
    </div>
  )
}

export default Session

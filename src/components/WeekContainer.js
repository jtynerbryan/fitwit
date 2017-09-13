import React from 'react'
import Session from './Session'

const WeekContainer = (props) => {

	const sessionContainers = () => {
		const allContainers = []
		const exercises = props.exercises.reduce((a, b) => a.concat(b), [])
		for(let i = 1; i <= props.user.days_a_week; i++){
			allContainers.push(<Session key={i} session={i} exercises={exercises} />)
		}
		return allContainers
	}

	return(
		<div>
			<h1>Week {props.week}</h1>
			{sessionContainers()}
		</div>
	)
}

export default WeekContainer

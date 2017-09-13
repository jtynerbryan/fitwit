import React from 'react'
import Session from './Session'

const WeekContainer = (props) => {

	const sessionContainers = () => {
		const allContainers = []
		console.log('blaaaaah', props.exercises)
		const exercises = props.exercises.reduce((a, b) => a.concat(b), [])
		for(let i = 1; i <= props.plan.daysAWeek; i++){
			allContainers.push(<Session key={i} session={i} plan={props.plan} exercises={exercises} />)
		}
		return allContainers
	}

	return(
		<div>
			<h1>Week {props.week}</h1>
			{sessionContainers().map(container => container)}
		</div>
	)
}

export default WeekContainer

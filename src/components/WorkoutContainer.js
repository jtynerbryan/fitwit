import React from 'react'
import WeekContainer from './WeekContainer'

const WorkoutContainer = (props) => {

	const workoutContainers = () => {
		const allContainers = []
		for(let i = 1; i <= props.plan.programLength; i++){
			allContainers.push(<WeekContainer key={i} week={i} exercises={props.exercises} plan={props.plan} />)
		}
		return allContainers
	}

	return(
		<div>
			{workoutContainers().map(container => container)}
		</div>
	)
}

export default WorkoutContainer

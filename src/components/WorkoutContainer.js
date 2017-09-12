import React from 'react'
import WeekContainer from './WeekContainer'

const WorkoutContainer = () => {

	const workoutContainers = () => {
		const allContainers = []
		for(let i = 1; i <= this.props.plan.programLength; i++){
			allContainers.push(<WeekContainer key={i} week={i} exercises={this.props.exercises} plan={this.props.plan}/>)
		}
		return allContainers
	}

	return(
		<div>
			{this.workoutContainers().map(container => container)}
		</div>
	)
}

export default WorkoutContainer

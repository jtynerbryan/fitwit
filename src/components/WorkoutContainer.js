import React from 'react'
import WeekContainer from './WeekContainer'

class WorkoutContainer extends React.Component{
	constructor(){
		super()
	}

	workoutContainers = () => {
		const allContainers = []
		for(let i = 1; i <= this.props.plan.programLength; i++){
			allContainers.push(<WeekContainer key={i} week={i} exercises={this.props.exercises} plan={this.props.plan}/>)
		}
		return allContainers
	}

	render(){
		return(
			<div>
				{this.workoutContainers().map(container => container)}
			</div>
		)
	}
}

export default WorkoutContainer

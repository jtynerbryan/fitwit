import React from 'react'
import Session from './Session'

class WeekContainer extends React.Component{
	constructor(){
		super()
	}

	sessionContainers = () => {
		const allContainers = []
		const exercises = this.props.exercises.reduce((a, b) => a.concat(b), [])
		console.log(exercises)
		for(let i = 1; i <= this.props.plan.daysAWeek; i++){
			allContainers.push(<Session key={i} session={i} plan={this.props.plan} exercises ={exercises}/>)
		}
		return allContainers
	}

	render(){


		return(
			<div>
				<h1>Week {this.props.week}</h1>
				{this.sessionContainers().map(container => container)}
			</div>
		)
	}
}

export default WeekContainer

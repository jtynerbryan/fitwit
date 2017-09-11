import React from 'react'
import Session from './Session'

class WeekContainer extends React.Component{
	constructor(){
		super()
	}

	sessionContainers = () => {
		const allContainers = []
		for(let i = 1; i <= this.props.plan.daysAWeek; i++){
			allContainers.push(<Session key={i} session={i} plan={this.props.plan}/>)
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

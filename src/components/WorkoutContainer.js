import React from 'react'
import WeekContainer from './WeekContainer'

class WorkoutContainer extends React.Component {
	constructor(){
		super()

		this.state = {
			exercises: []
		}
	}

	componentDidMount = () => {
			const usernameJSON = JSON.stringify({username: this.props.username})
		    return fetch('http://localhost:3001/api/v1/exercises',{
		      method: 'get',
		      headers: {
		        "Content-Type":"application/json",
		        "Accept":"application/json",
		        "username":usernameJSON
		      }
		    })
			.then(res => res.json())
			.then(res => console.log(res))
	}

	// const workoutContainers = () => {
	// 	const allContainers = []
	// 	for(let i = 1; i <= this.props.plan.programLength; i++){
	// 		allContainers.push(<WeekContainer key={i} week={i} exercises={this.props.exercises} plan={this.props.plan} />)
	// 	}
	// 	return allContainers
	// }

	// {workoutContainers().map(container => container)}

	
	render() {
		return (
			<div>
				<h1>{this.props.username}'s Workout Plan</h1>
			</div>
		)		
	}

}

export default WorkoutContainer

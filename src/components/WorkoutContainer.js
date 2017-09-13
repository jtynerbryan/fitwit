import React from 'react'
import WeekContainer from './WeekContainer'

class WorkoutContainer extends React.Component {
	// constructor(){
	// 	super()
	//
	// 	this.state = {
	// 		exercises: []
	// 	}
	// }

	// componentDidMount(){
	// 		const usernameJSON = JSON.stringify({username: this.props.user.username})
	// 	    return fetch('http://localhost:3001/api/v1/exercises', {
	// 	      method: 'get',
	// 	      headers: {
	// 	        "Content-Type":"application/json",
	// 	        "Accept":"application/json",
	// 	        "username": usernameJSON
	// 	      }
	// 	    })
	// 		.then(res => res.json())
	// 		.then(res => this.setState({exercises: res.exercises}))
	// }

	workoutContainers = () => {
		const allContainers = []
		for(let i = 1; i <= this.props.user.length_of_program; i++){
			allContainers.push(<WeekContainer key={i} week={i} exercises={this.props.exercises} user={this.props.user} />)
		}
		console.log("hit workout container", this.props.user)
		return allContainers
	}

	render() {
		console.log("props from workout container", this.props)
		return (
			<div>
				<h1>{this.props.user.username}'s Workout Plan</h1>
				{this.props.exercises.length > 4 ? this.workoutContainers() : <h1>Loading Exercises...</h1>}
			</div>
		)
	}

}

export default WorkoutContainer

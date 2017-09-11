import React from 'react'
import { Checkbox, Button, Form } from 'semantic-ui-react'

class PlanForm extends React.Component {
	constructor() {
		super()

		this.state = {
			backBiceps: false,
			shoulderAbs: false,
			chestTriceps: false,
			legsCalves: false,
			daysAWeek: undefined,
			programLength: undefined
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()


	}

	handleDaysAWeek = (event) => {
		this.setState({
			daysAWeek: parseInt(event.target.value)
		})
	}

	handleProgramLength = (event) => {
		this.setState({
			programLength: parseInt(event.target.value)
		})
	}

	handleCheckbox = (event) => {
		console.log(event.target.innerHTML)
		if (event.target.innerHTML === 'Back/biceps'){
			this.setState({
				backBiceps: !this.state.backBiceps
			},()=>console.log(this.state))
		}
		else if (event.target.innerHTML === 'Shoulder/abs'){
			this.setState({
				shoulderAbs: !this.state.shoulderAbs
			},()=>console.log(this.state))
		}
		else if (event.target.innerHTML === 'Chest/triceps'){
			this.setState({
				chestTriceps: !this.state.chestTriceps
			},()=>console.log(this.state))
		}
		else if (event.target.innerHTML === 'Legs/calves'){
			this.setState({
				legsCalves: !this.state.legsCalves
			},()=>console.log(this.state))
		}

	}

	render() {
		return (
		  <Form onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>How many days a week would you like to work out?</label>
		      <input type='number' min='1' max='4' placeholder='Please enter 1-4' onChange={this.handleDaysAWeek} value={this.state.daysAWeek}/>
		    </Form.Field>
		    <Form.Field>
		      <label>How many weeks do you want your program to run for?</label>
		      <input type='number' min='4' max='12' placeholder='Please enter 4-12' onChange={this.handleProgramLength} value={this.state.programLength} />
		    </Form.Field>
		    <Form.Field>
		    <label>If you're working out less than 4 days a week, please select the muscle groups you would like to work on</label>
		      <Checkbox label='Back/biceps' name='backBiceps' onChange={this.handleCheckbox} /><br/>
		      <Checkbox label='Shoulder/abs' onChange={this.handleCheckbox} /><br/>
		      <Checkbox label='Chest/triceps' onChange={this.handleCheckbox} /><br/>
		      <Checkbox label='Legs/calves' onChange={this.handleCheckbox} />
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

export default PlanForm

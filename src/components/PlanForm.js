import React from 'react'
import { Checkbox, Button, Form } from 'semantic-ui-react'

class PlanForm extends React.Component {
	constructor() {
		super()

		this.state = {
			backBiceps: [],
			shoulderAbs: [],
			chestTriceps: [],
			legsCalves: [],
			daysAWeek: 0,
			programLength: 0
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	handleDaysAWeek = () => {

	}

	handleProgramLength = () => {

	}

	handleCheckbox = () => {

	}

	render() {
		return (
		  <Form>
		    <Form.Field>
		      <label>How many days a week would you like to work out?</label>
		      <input placeholder='Please enter 1-4' />
		    </Form.Field>
		    <Form.Field>
		      <label>How many weeks do you want your program to run for?</label>
		      <input placeholder='Please enter 4-12' />
		    </Form.Field>
		    <Form.Field>
		    <label>If you're working out less than 4 days a week, please select the muscle groups you would like to work on</label>
		      <Checkbox label='Back/biceps' />
		      <Checkbox label='Shoulder/abs' />
		      <Checkbox label='Chest/triceps' />
		      <Checkbox label='Legs/calves' />
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

export default PlanForm
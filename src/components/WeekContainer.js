import React from 'react'
import List from './List'

const WeekContainer = (props) => {
	return <div>
			<h1>Week 1</h1>
		   <List exercise={props.exercise}/>
		   </div>
}

export default WeekContainer
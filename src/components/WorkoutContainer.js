import React from 'react'
import WeekContainer from './WeekContainer'

const WorkoutContainer = (props) => {
	return <div>
	{for (let i = 1; i < props.plan.programLength; i++) {
		<WeekContainer week={i} plan={props.plan}/>
	}}
	</div>
}


export default WorkoutContainer


